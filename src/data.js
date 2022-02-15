import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Jazz Cabbage",
      artist: "Ian Ewing, Strehlow",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/06/49f6e32ca521fbad46a1b281e3893cf6254bf11d-1024x1024.jpg",
      id: uuidv4(),
      active: true,
      color: ["#9E4846", "#FBE7C6"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=27500",
    },
    {
      name: "Lagoon",
      artist: "Strehlow, Chris Mazuera",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/06/49f6e32ca521fbad46a1b281e3893cf6254bf11d-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#9E4846", "#FBE7C6"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=27500",
    },
    {
      name: "Like the Sky, or Something Else",
      artist: "Sleepy Fish",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/09/2ce75252f5419a45d76bb93424ac1eae3e688b17-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#13273E", "#AF8B76"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=24828",
    },
    {
      name: "Library Card",
      artist: "Sleepy Fish",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/09/2ce75252f5419a45d76bb93424ac1eae3e688b17-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#13273E", "#AF8B76"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=24825",
    },
    {
      name: "La zona",
      artist: "Maydee",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/11/3ff29a35be582c8dc0222273cb9c401ea6b209dc-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#4D4309", "#84A3BF"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=27455",
    },
  ];
}

export default chillHop;
