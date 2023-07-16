interface ActionCardContentProps {
  text: string
}

export function ActionCardContent({ text }: ActionCardContentProps) {
  return <p className="text-1 font-1 leading-1 text-gray-02">{text}</p>
}
