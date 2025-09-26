// src/structural/facade/example.ts

// Subsystem A
class AudioSystem {
  on(): void {
    console.log('Audio system ON');
  }
  setVolume(level: number): void {
    console.log(`Audio volume set to ${level}`);
  }
}

// Subsystem B
class VideoSystem {
  on(): void {
    console.log('Video system ON');
  }
  setResolution(res: string): void {
    console.log(`Video resolution set to ${res}`);
  }
}

// Subsystem C
class StreamingService {
  connect(): void {
    console.log('Connected to streaming service');
  }
  play(movie: string): void {
    console.log(`Streaming movie: ${movie}`);
  }
}

// Facade
class HomeTheaterFacade {
  private audio: AudioSystem;
  private video: VideoSystem;
  private streaming: StreamingService;

  constructor(
    audio: AudioSystem,
    video: VideoSystem,
    streaming: StreamingService,
  ) {
    this.audio = audio;
    this.video = video;
    this.streaming = streaming;
  }

  watchMovie(movie: string): void {
    console.log('Setting up movie...');
    this.audio.on();
    this.audio.setVolume(50);

    this.video.on();
    this.video.setResolution('1080p');

    this.streaming.connect();
    this.streaming.play(movie);

    console.log('Enjoy your movie!');
  }
}

// Client
function main() {
  const audio = new AudioSystem();
  const video = new VideoSystem();
  const streaming = new StreamingService();

  const homeTheater = new HomeTheaterFacade(audio, video, streaming);
  homeTheater.watchMovie('Inception');
}

main();
