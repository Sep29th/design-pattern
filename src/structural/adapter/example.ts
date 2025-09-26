// src/structural/adapter/example.ts

// Target interface
interface MediaPlayer {
  play(filename: string): void;
}

// Adaptee (class có sẵn, interface khác)
class LegacyAudioPlayer {
  playFile(file: string): void {
    console.log(`Playing audio file (legacy): ${file}`);
  }
}

// Adapter: chuyển đổi từ MediaPlayer sang LegacyAudioPlayer
class AudioPlayerAdapter implements MediaPlayer {
  private legacyPlayer: LegacyAudioPlayer;

  constructor(legacyPlayer: LegacyAudioPlayer) {
    this.legacyPlayer = legacyPlayer;
  }

  play(filename: string): void {
    this.legacyPlayer.playFile(filename);
  }
}

// Client
function main() {
  const legacyPlayer = new LegacyAudioPlayer();
  const player: MediaPlayer = new AudioPlayerAdapter(legacyPlayer);

  player.play('song.mp3');
}

main();
