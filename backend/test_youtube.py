import pytubefix
import os
import subprocess

def download_youtube_video(url: str, output_path: str = ".") -> str:
    """
    Downloads a YouTube video from the given URL to the specified output path.

    Args:
        url (str): The URL of the YouTube video.
        output_path (str): Directory to save the downloaded video.

    Returns:
        str: The file path of the downloaded video.
    """
    yt = pytubefix.YouTube(url)
    stream = yt.streams.get_highest_resolution()
    file_path = stream.download(output_path=output_path)
    return file_path

def download_youtube_audio(url: str, output_path: str = ".") -> str:
    yt = pytubefix.YouTube(url)
    audio_stream = yt.streams.filter(only_audio=True).first()
    # Download as original file (usually .webm or .mp4)
    temp_file_path = audio_stream.download(output_path=output_path)
    base, _ = os.path.splitext(temp_file_path)
    mp3_file_path = base + ".mp3"
    # Convert to mp3 using ffmpeg
    subprocess.run(["ffmpeg", "-y", "-i", temp_file_path, mp3_file_path], check=True)
    os.remove(temp_file_path)
    return mp3_file_path

if __name__ == "__main__":
    video_url = "https://youtu.be/5iGUXZEYDFo?si=rkqXztzF1Qg783pf"
    # download_path = download_youtube_video(video_url, "./downloads")
    download_path = download_youtube_audio(video_url, "./downloads")
    print(f"Downloaded to: {download_path}")