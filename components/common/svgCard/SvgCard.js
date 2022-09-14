import Link from "next/link";

const SvgCard = function ({ location, title, svgName, svgId }) {
  return (
    <li>
      <Link href={location}>
        <a>
          <svg>
            <use xlinkHref={`assets/svg/${svgName}.svg#${svgId}`} />
          </svg>
          {title}
        </a>
      </Link>
    </li>
  );
};

export default SvgCard;
