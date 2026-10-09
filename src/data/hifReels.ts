export interface HifReel {
  id: string
  /** Path to the self-hosted video file, e.g. "/videos/reels/reel-1.mp4" */
  videoUrl: string
  /** First-frame poster image, shown instantly while the video buffers */
  posterUrl: string
  caption: string
}

/**
 * Self-hosted vertical clips for the homepage Reels showcase — files live in
 * public/videos/reels/ (posters in public/images/reels/). Each entry renders
 * as one slide in the carousel.
 */
export const HIF_REELS: HifReel[] = [
  {
    id: 'reel-1',
    videoUrl: '/videos/reels/reel-1.mp4',
    posterUrl: '/images/reels/reel-1.jpg',
    caption: 'Project Boondh, 11th edition — community football at Nehru Maidan.'
  },
  {
    id: 'reel-2',
    videoUrl: '/videos/reels/reel-2.mp4',
    posterUrl: '/images/reels/reel-2.jpg',
    caption: 'Inside a home visit with HIF Qatar — seeing the need on the ground together.'
  },
  {
    id: 'reel-3',
    videoUrl: '/videos/reels/reel-3.mp4',
    posterUrl: '/images/reels/reel-3.jpg',
    caption: "A children's activity day — games, balloons, and community outdoors."
  },
  {
    id: 'reel-4',
    videoUrl: '/videos/reels/reel-4.mp4',
    posterUrl: '/images/reels/reel-4.jpg',
    caption: 'HIF Youth Wing — a reflection exercise from a mentoring session.'
  },
  {
    id: 'reel-5',
    videoUrl: '/videos/reels/reel-5.mp4',
    posterUrl: '/images/reels/reel-5.jpg',
    caption: 'Ummi — an evening honouring mothers, with jannah beneath her feet.'
  },
  {
    id: 'reel-6',
    videoUrl: '/videos/reels/reel-6.mp4',
    posterUrl: '/images/reels/reel-6.jpg',
    caption: 'Youth volunteers packing meals — hands-on service from the HIF team.'
  },
  {
    id: 'reel-7',
    videoUrl: '/videos/reels/reel-7.mp4',
    posterUrl: '/images/reels/reel-7.jpg',
    caption: 'HIF Youth presents Transform Your Tomorrow — Mangaluru auditorium setup.'
  },
  {
    id: 'reel-8',
    videoUrl: '/videos/reels/reel-8.mp4',
    posterUrl: '/images/reels/reel-8.jpg',
    caption: 'A full house for a youth talk — learning, faith, and community together.'
  }
]
