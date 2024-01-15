from sqlalchemy.orm import Session, sessionmaker
from sqlalchemy import create_engine
from google.cloud import storage
import os

# postgres
DATABASE_URL = "postgresql+psycopg2://postgres:postgres@localhost/postgres"
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# google cloud
cliente = storage.Client.from_service_account_json(os.path.abspath(r'./key/projetovalidaquero.json'))
bucket_name = 'projetovalidaquero'
bucket = cliente.bucket(bucket_name)
