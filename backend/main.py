from fastapi import FastAPI
from .routes import youtube_download

app = FastAPI()

app.include_router(youtube_download.router)

@app.get("/")
async def root():
    return {"message": "Welcome to the YouTube Downloader API"}