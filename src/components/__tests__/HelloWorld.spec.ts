import { mount } from '@vue/test-utils';
import HelloWorld from '../HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('affiche le message transmis en prop', () => {
    const wrapper = mount(HelloWorld, {
      props: {
        message: 'Bonjour les tests 🎉',
      },
    });

    expect(wrapper.text()).toContain('Bonjour les tests 🎉');
  });
});

/*
describe() → groupe de tests (ici pour le composant).

it() → un test unitaire (nom explicite).

mount() → monte le composant dans un DOM simulé.

expect() → assertions (= ce qu’on vérifie).

lancer le test avec: npx jest
*/
