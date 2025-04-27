import sys
import os
import pandas as pd
import numpy as np
from supabase import create_client, Client
from jobspy import scrape_jobs

try:
    supabase: Client = create_client(sys.argv[1], sys.argv[2])
except Exception as err:
    print(f"Unexpected {err=}, {type(err)=}")
    raise

try:
    jobs = scrape_jobs(
        site_name=["indeed", "zip_recruiter", "glassdoor", "google", "naukri"],
        search_term="software engineer",
        google_search_term="software engineer jobs near San Francisco, CA since yesterday",
        location="San Francisco, CA",
        results_wanted=20,
        hours_old=72,
        country_indeed='USA',
    )
except Exception as err:
    print(f"Unexpected {err=}, {type(err)=}")
    raise

# Fix NaN to None
jobs = jobs.where(pd.notnull(jobs), None)

# Fix datetime columns
for col in jobs.columns:
    if pd.api.types.is_datetime64_any_dtype(jobs[col]) or pd.api.types.is_object_dtype(jobs[col]):
        jobs[col] = jobs[col].apply(lambda x: x.isoformat() if hasattr(x, "isoformat") else x)

# ✅ Finally fix NaN, inf, -inf
jobs = jobs.replace({np.nan: None, np.inf: None, -np.inf: None})

allowed_columns = [
    "site", "job_url", "job_url_direct", "title", "company",
    "location", "date_posted", "job_type", "salary_source",
    "interval", "min_amount", "max_amount", "currency",
    "is_remote", "job_level", "job_function", "listing_type",
    "emails", "description", "company_industry", "company_url",
    "company_logo", "company_url_direct", "company_addresses",
    "company_num_employees", "company_revenue", "company_description",
]

jobs = jobs[[col for col in allowed_columns if col in jobs.columns]]

try:
    response = (
        supabase.table("ScrapedJobs")
        .insert(jobs.to_dict(orient="records"))
        .execute()
    )
    print("We should have successfully inserted ", len(jobs) , " records")
except Exception as err:
    print(f"Unexpected {err=}, {type(err)=}")
    raise

sys.stdout.flush()