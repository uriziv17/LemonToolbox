from fastapi import APIRouter
from fastapi.responses import FileResponse
import pytubefix
from fastapi import Request
from pydantic import BaseModel

router = APIRouter(prefix="/youtube", tags=["YouTube Download"])

class DownloadRequest(BaseModel):
    url: str
    audio_only: bool = False

@router.post("/video")
async def download_video(request: DownloadRequest):
    try:
        yt = pytubefix.YouTube(request.url)
        stream = yt.streams.get_highest_resolution()
        file_path = stream.download(output_path="downloads")

        # todo: handle audio only case
        if request.audio_only: 
            pass

        return FileResponse(
            file_path,
            filename=yt.title + ".mp4",
            media_type="video/mp4" if not request.audio_only else "audio/mp4"
        )
    except Exception as e:
        return {"error": str(e)}

