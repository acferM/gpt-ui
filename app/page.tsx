/* eslint-disable jsx-a11y/alt-text */
import { ActionCard } from './components/ActionCard'
import { Input } from './components/Input'
import { Image, Music, Play, Tag, Wand, Send } from './components/icons'

export default function Home() {
  return (
    <div className="bg-cover bg-home-page px-28 py-10 flex flex-1 min-h-screen items-center justify-center">
      <main className="gap-10 flex flex-1 p-14 items-center justify-center flex-col bg-gray-07 bg-opacity-80 rounded-3xl border border-gray-04">
        <header className="flex flex-col items-center gap-6">
          <Wand />

          <h1 className="text-heading font-heading leading-heading text-gray-01">
            Experimente o poder da Inteligência Artificial
          </h1>
        </header>

        <main className="max-w-[608px] flex flex-col gap-4 w-full">
          <ActionCard.Root>
            <ActionCard.Icon>
              <Tag />
            </ActionCard.Icon>

            <ActionCard.Content text="Gerador de códigos" />
          </ActionCard.Root>

          <ActionCard.Root>
            <ActionCard.Icon>
              <Image />
            </ActionCard.Icon>

            <ActionCard.Content text="Edição de foto" />
          </ActionCard.Root>

          <ActionCard.Root>
            <ActionCard.Icon>
              <Play />
            </ActionCard.Icon>

            <ActionCard.Content text="Geração de vídeos" />
          </ActionCard.Root>

          <ActionCard.Root>
            <ActionCard.Icon>
              <Music />
            </ActionCard.Icon>

            <ActionCard.Content text="Criador de áudios e musicas" />
          </ActionCard.Root>
        </main>

        <footer className="border-t border-gray-04 pt-10 w-full">
          <form className="flex items-center gap-4 w-full">
            <Input />

            <button className="bg-gray-06 p-4 rounded-2xl border border-gray-05 transition-all hover:bg-gray-05 focus:outline focus:outline-blue-400">
              <Send />
            </button>
          </form>
        </footer>
      </main>
    </div>
  )
}
