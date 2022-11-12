export interface dataPost {
  username: string;
  profileimg: string;
  image: string;
  comments: number;
  viewers: number;
  comment: string;
}

const data: dataPost[] = [
  {
    username: "kimkardashian",
    profileimg: "../imagesPost/perfil.png",
    image: "../imagesPost/kim.jpg",
    comment: "Milan spam get ready 🖤",
    comments: 961,
    viewers: 10945
  },
];

export default data;
