import { MouseEventHandler } from 'react';

interface UiButtonParams {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const UiButton: React.FC<UiButtonParams> = params => {
  return (
    <button
      className={`
      bg-indigo-400 py-2 px-4 rounded active:bg-indigo-200 focus-visible:border-black focus-visible:border
        ${params.className ?? ''}
      `}
      onClick={params.onClick}>
      {params.children}
    </button>
  );
};

export default UiButton;
