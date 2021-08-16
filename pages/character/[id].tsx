import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Layout } from '../../layout';
import { getCharacter } from '../../components/character/services/characters.service';
import { ICharacterVM } from '../../components/character/Characters.vm';
import { saveCharacterToStore } from '../../components/character/services/characters.local';
import { useAppSelector } from '../../hooks/store';
import Custom404 from '../404';
import { Characters } from '../../components/character/Characters';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const character: ICharacterVM = await getCharacter(parseInt(id as string));

  return {
    props: {
      characterProp: character,
    },
  };
};

export default function Character({ characterProp }: { characterProp: ICharacterVM }) {
  if (!characterProp) {
    return <div>Loading</div>;
  }

  // const isCharacterInStore: boolean = useAppSelector((state) =>
  //   state.characters.value.some((characterInStore) => characterInStore.id === characterProp.id)
  // );

  // useEffect(() => {
  //   if (!isCharacterInStore) saveCharacterToStore(characterProp);
  // }, [characterProp, isCharacterInStore]);

  if (!characterProp.id) {
    return <Custom404 />;
  }

  return (
    <Layout childTitle={characterProp.name}>
      <Head>
        <title>{characterProp.name} - Star Wars Characters</title>
      </Head>
      <Characters character={characterProp} />
    </Layout>
  );
}
