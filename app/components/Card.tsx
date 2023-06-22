import Image from "next/image";

type Props = {
  title: string;
  description: string;
  image: string;
};

export default function Card({ title, description, image }: Props) {
  return (
    <div>
      {title}
      <p>{description}</p>
      <Image src={image} width={100} height={100} alt={description} />
    </div>
  );
}
