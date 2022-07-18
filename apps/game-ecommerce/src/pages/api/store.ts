import type { NextApiRequest, NextApiResponse } from "next";
import type { GamePreview } from "~/types/game";
import type { StoreSectionContent } from "~/types/store";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const query = req.query;

  if ("section" in query) {
    const previews: GamePreview[] = [
      { title: "Lorem Game 1", coverImage: { src: "https://dummyimage.com/3:4x1080", width: 810, height: 1080, alt: "Game Thumbnail" }, price: 59.99, salePrice: 10 },
      { title: "Lorem Game 2", coverImage: { src: "https://dummyimage.com/3:4x1080", width: 810, height: 1080, alt: "Game Thumbnail" }, price: 59.99, salePrice: 39.99 },
      { title: "Lorem Game 3", coverImage: { src: "https://dummyimage.com/3:4x1080", width: 810, height: 1080, alt: "Game Thumbnail" }, price: 59.99 },
      { title: "Lorem Game 4", coverImage: { src: "https://dummyimage.com/3:4x1080", width: 810, height: 1080, alt: "Game Thumbnail" }, price: 59.99, salePrice: 19.99 },
      { title: "Lorem Game 5", coverImage: { src: "https://dummyimage.com/3:4x1080", width: 810, height: 1080, alt: "Game Thumbnail" }, price: 59.99 },
    ];

    const sectionContent: StoreSectionContent = {
      title: "Lorem Ipsum",
      href: "/lorem-ipsum",
      content: [...previews],
    };
    return res.status(200).json(sectionContent);
  }

  return res.status(400).json({ message: "Invalid Request" });
}
