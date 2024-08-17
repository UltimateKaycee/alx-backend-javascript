import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const pho1 = uploadPhoto();
  const pho2 = createUser();

  return Promise.all([pho1, pho2]).then((value) => {
    console.log(`${value[0].body} ${value[1].firstName} ${value[1].lastName}`);
  })
    .catch(() => { console.log('Signup system offline'); });
}
