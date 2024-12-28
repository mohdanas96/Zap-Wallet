import Image, { type ImageProps } from 'next/image'
import { Button } from '@repo/ui/button'
import styles from './page.module.css'
import { InputBox } from '@repo/ui/InputBox'

type Props = Omit<ImageProps, 'src'> & {
  srcLight: string
  srcDark: string
}

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props

  return (
    <>
      <Image {...rest} src={srcLight} className="imgLight" />
      <Image {...rest} src={srcDark} className="imgDark" />
    </>
  )
}

export default function Home() {
  return (
    <div className="bg-slate-300 p-5 text-black text-center">
      User app
      <InputBox />
    </div>
  )
}
