import Image from 'next/image'

type IconProps = {
  readonly id: string
  readonly svg: string
  readonly width: number
  readonly height: number
  readonly alt: string
  readonly className?: string
}

const Icon: React.FC<IconProps> = ({
  id,
  svg,
  width,
  height,
  alt,
  className,
}) => {
  return (
    <Image
      id={id}
      className={className}
      src={svg}
      width={width}
      height={height}
      alt={alt}
    />
  )
}

export default Icon
