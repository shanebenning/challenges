import { GamePreview } from "~/types/game";
import Image from "next/future/image";
import cx from "~/lib/cx";
import Link from "next/link";
import { asCurrencyString, percentOff } from "~/lib/currency";

const GamePreview = ({ game }: { game: GamePreview }) => {
  const gameHref: string = "/"
  const { title, coverImage, price, salePrice } = game;
  const isOnSale: boolean = typeof salePrice !== "undefined";

  return (
    <article className="flex-1">
      <figure className="">
        <Link href={ gameHref }>
          <a>
            <div className="relative rounded-lg shadow-sm">
              {isOnSale && (
                <div className="absolute bottom-2 right-3">
                  <span className="shadow-sm text-xs font-bold rounded-full bg-emerald-400 text-emerald-700 px-2.5 py-0.5">
                    -{ percentOff(salePrice, price) }%
                  </span>
                </div>
              )}
              <Image className="aspect-[3/4] rounded-lg" {...coverImage} />
            </div>
          </a>
        </Link>
        <figcaption>
          <h3 className="text-lg font-bold my-0.5">
            <Link href={ gameHref }>
              <a>{title}</a>
            </Link>
          </h3>
          <div className="flex space-x-1.5">
            {isOnSale && (
              <span className="block font-semibold text-emerald-600">
                { asCurrencyString(salePrice) }
              </span>
            )}
            <span
              className={cx(
                isOnSale ? "line-through text-slate-400" : "font-semibold",
                "block"
              )}
            >
              { asCurrencyString(price) }
            </span>
          </div>
        </figcaption>
      </figure>
    </article>
  );
};

export default GamePreview;
