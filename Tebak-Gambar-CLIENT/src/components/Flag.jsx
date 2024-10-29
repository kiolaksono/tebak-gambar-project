export default function Flags(){
    const flags = [
        {
          "id": 1,
          "negara": "Indonesia",
          "image": "https://flagcdn.com/w320/id.png"
        },
        {
          "id": 2,
          "negara": "Malaysia",
          "image": "https://flagcdn.com/w320/my.png"
        },
        {
          "id": 3,
          "negara": "Singapura",
          "image": "https://flagcdn.com/w320/sg.png"
        },
        {
          "id": 4,
          "negara": "Thailand",
          "image": "https://flagcdn.com/w320/th.png"
        },
        {
          "id": 5,
          "negara": "Filipina",
          "image": "https://flagcdn.com/w320/ph.png"
        },
        {
          "id": 6,
          "negara": "Vietnam",
          "image": "https://flagcdn.com/w320/vn.png"
        },
        {
          "id": 7,
          "negara": "Jepang",
          "image": "https://flagcdn.com/w320/jp.png"
        },
        {
          "id": 8,
          "negara": "Korea Selatan",
          "image": "https://flagcdn.com/w320/kr.png"
        },
        {
          "id": 9,
          "negara": "China",
          "image": "https://flagcdn.com/w320/cn.png"
        },
        {
          "id": 10,
          "negara": "India",
          "image": "https://flagcdn.com/w320/in.png"
        }
      ]

      let arr = []
      let number = new Set()
      while (number.size< 4){
        const random = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
        number.add(random)
    }
    arr.push(Array.from(number))


    return(
        <>
        
        </>
    )
}