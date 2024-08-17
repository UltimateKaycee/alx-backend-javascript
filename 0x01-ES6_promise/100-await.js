import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const proma = await uploadPhoto();
    const promb = await createUser();

    return ({ photo: proma, user: promb });
  } catch (error) {
    return ({ photo: null, user: null });
  }
}
