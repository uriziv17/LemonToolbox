from fastapi import APIRouter
from fastapi.responses import FileResponse
import pytubefix

router = APIRouter(prefix="/youtube", tags=["YouTube Download"])

@router.get("/video")
async def download_video(url: str, audio_only: bool = False, output_path: str = "."):
    try:
        yt = pytubefix.YouTube(url)
        stream = yt.streams.get_highest_resolution()
        file_path = stream.download(output_path=output_path)
        return FileResponse(
            file_path,
            filename=file_path.split("\\")[-1],
            media_type="video/mp4" if not audio_only else "audio/mp4"
        )
    except Exception as e:
        return {"error": str(e)}

