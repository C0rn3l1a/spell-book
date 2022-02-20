import type { NextPage } from 'next';
import UiButton from '../components/ui-kit/UiButton';
import SpellCard from '../components/ui-kit/UiSpellCard';
import UiTable from '../components/ui-kit/UiTable/UiTable';

const ComponentSheet: NextPage = () => {
  return (
    <main className="flex flex-col gap-8">
      {/* BUTTONS */}
      <section className="flex flex-col shrink gap-4">
        <h3 className="text-3xl font-bold">BUTTON</h3>
        <div>
          <UiButton>Ui Button</UiButton>
        </div>
      </section>

      {/* SPELLCARDS */}
      <section className="flex flex-col shrink gap-4">
        <h3 className="text-3xl font-bold">SPELLCARDS</h3>
        <div className="w-1/4">
          <SpellCard />
        </div>
      </section>

      {/* SPELLTABLE */}
      <section className="flex flex-col shrink gap-4">
        <h3 className="text-3xl font-bold">SPELLS TABLE</h3>
        <div className="w-1/4">
          <UiTable />
        </div>
      </section>
    </main>
  );
};

export default ComponentSheet;
