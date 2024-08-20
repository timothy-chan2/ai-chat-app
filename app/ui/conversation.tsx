'use client';

interface Props {
  chatData: string | null | undefined
}

export default function Conversation(props: Props) {
  return (
    <p>{ props.chatData }</p>
  );
}