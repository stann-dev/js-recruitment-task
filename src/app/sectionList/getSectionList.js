import { getData } from '../fetch/fetchData';

export async function getSectionList() {
  try {
    const sectionList = await getData(
      '/sections'
    );
    return sectionList;
  } catch (error) {
    console.log(error);
  }
}
