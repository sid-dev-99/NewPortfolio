import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
    // Playlist requested by user (Full length royalty-free songs)
    const playlist = [
        {
            title: "Night Owl",
            artist: "Broke For Free",
            albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music3/v4/ed/26/ca/ed26cadf-83f5-1e46-a144-0246559c5d50/889211401642.jpg/600x600bb.jpg",
            songUrl: "https://freemusicarchive.org/music/Broke_For_Free/Directionless_EP/Broke_For_Free_-_01_-_Night_Owl/",
            previewUrl: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Broke_For_Free/Directionless_EP/Broke_For_Free_-_01_-_Night_Owl.mp3"
        },
        {
            title: "Enthusiast",
            artist: "Tours",
            albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/0d/63/03/0d6303f5-35f7-3358-8686-6f8e403d1021/198000787224.jpg/600x600bb.jpg",
            songUrl: "https://freemusicarchive.org/music/Tours/Enthusiast/Tours_-_01_-_Enthusiast/",
            previewUrl: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Tours/Enthusiast/Tours_-_01_-_Enthusiast.mp3"
        },
        {
            title: "Algorithms",
            artist: "Chad Crouch",
            albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/36/9a/ba/369aba9e-b4cb-644e-6fc1-eb5b12e4b939/dj.kspiuiur.jpg/600x600bb.jpg",
            songUrl: "https://freemusicarchive.org/music/Chad_Crouch/Arps/Algorithms/",
            previewUrl: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Chad_Crouch/Arps/Chad_Crouch_-_Algorithms.mp3"
        },
        {
            title: "Sentinel",
            artist: "Kai Engel",
            albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/9f/a7/e3/9fa7e37c-7b30-2a7a-87b3-62af33c1b373/194171218675.png/600x600bb.jpg",
            songUrl: "https://freemusicarchive.org/music/Kai_Engel/Satin/Sentinel/",
            previewUrl: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Kai_Engel/Satin/Kai_Engel_-_04_-_Sentinel.mp3"
        }
    ];

    // Rotate song based on time (changes every hour)
    const index = Math.floor(Date.now() / 3600000) % playlist.length;
    const song = playlist[index];

    return NextResponse.json({
        isPlaying: false,
        title: song.title,
        artist: song.artist,
        albumArt: song.albumArt,
        songUrl: song.songUrl,
        previewUrl: song.previewUrl,
        lastPlayed: true
    });
}
