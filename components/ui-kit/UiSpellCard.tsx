interface SpellCardParams {}

const SpellCard: React.FC<SpellCardParams> = params => {
  return (
    <div className="flex flex-col p-4 rounded border">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold">Fireball</h3>
        <h3 className="text-xl font-bold">PHB</h3>
      </div>
      <p className="italic">3rd-level evocation</p>
      <p>
        <strong>Casting Time:</strong> 1 action
      </p>
      <p>
        <strong>Range:</strong> 1 action
      </p>
      <p>
        <strong>Components:</strong> V, S, M (a tiny ball of bat guano and
        sulfur)
      </p>
      <p>
        <strong>Duration:</strong> Instantaneous
      </p>
      <hr />
      <p>
        A bright streak flashes from your pointing finger to a point you choose
        within range and then blossoms with a low roar into an explosion of
        flame. Each creature in a 20-foot-radius sphere centered on that point
        must make a Dexterity saving throw. A target takes 8d6 fire damage on a
        failed save, or half as much damage on a successful one.
        <br />
        The fire spreads around corners. It ignites flammable objects in the
        area that aren't being worn or carried.
      </p>
      <p>
        <strong>
          <i>At Higher Levels:</i>
        </strong>{' '}
        When you cast this spell using a spell slot of 4th level or higher, the
        damage increases by 1d6 for each slot level above 3rd.
      </p>
      <strong>Classes:</strong> Sorcerer, Wizard
      <strong>Subclasses:</strong> Arcane Trickster Rogue, Artillerist
      Artificer, Eldritch Knight Fighter, Fiend Warlock, Four Elements Monk,
      Genie (Efreeti) Warlock, Light Cleric, Zeal (PSA) Cleric
    </div>
  );
};

export default SpellCard;
