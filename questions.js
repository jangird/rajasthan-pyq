const questions = [
  {
    question: "Rajasthan ka rajya pakshi kya hai?",
    options: ["Mor", "Godawan", "Kabutar", "Koyal"],
    answer: "Godawan"
  },
  {
    question: "Rajasthan ki rajdhani kya hai?",
    options: ["Jodhpur", "Jaipur", "Udaipur", "Kota"],
    answer: "Jaipur"
  },
  {
    question: "REET परीक्षा किस राज्य में होती है?",
    options: ["MP", "UP", "Rajasthan", "Bihar"],
    answer: "Rajasthan"
  },
  {
    question: "1. Rajasthan ki rajdhani kya hai?",
    options: ["Jaipur", "Jodhpur", "Udaipur", "Kota"],
    answer: "Jaipur"
  },
  {
    question: "2. Rajasthan ka sabse bada district kaunsa hai?",
    options: ["Jaisalmer", "Barmer", "Bikaner", "Ajmer"],
    answer: "Jaisalmer"
  },
  {
    question: "3. Rajasthan ka rajya pashu kaunsa hai?",
    options: ["Camel", "Tiger", "Elephant", "Lion"],
    answer: "Camel"
  },
  {
    question: "4. Rajasthan ka rajya pakshi kaunsa hai?",
    options: ["Godawan", "Peacock", "Eagle", "Sparrow"],
    answer: "Godawan"
  },
  {
    question: "5. Rajasthan ka rajya vriksh kaunsa hai?",
    options: ["Khejri", "Neem", "Peepal", "Banyan"],
    answer: "Khejri"
  },
  {
    question: "6. Rajasthan ka rajya phool kaunsa hai?",
    options: ["Rohida", "Rose", "Lotus", "Sunflower"],
    answer: "Rohida"
  },
  {
    question: "7. Rajasthan ka sabse bada shahar kaunsa hai?",
    options: ["Jaipur", "Ajmer", "Kota", "Bikaner"],
    answer: "Jaipur"
  },
  {
    question: "8. Rajasthan ka sabse lamba river kaunsa hai?",
    options: ["Chambal", "Luni", "Banas", "Mahi"],
    answer: "Chambal"
  },
  {
    question: "9. Thar Desert Rajasthan ke kis bhag me hai?",
    options: ["Western", "Eastern", "Southern", "Northern"],
    answer: "Western"
  },
  {
    question: "10. Pushkar Mela kis district me lagta hai?",
    options: ["Ajmer", "Jaipur", "Bikaner", "Alwar"],
    answer: "Ajmer"
  },

  {
    question: "11. Hawa Mahal kaha hai?",
    options: ["Jaipur", "Udaipur", "Jodhpur", "Kota"],
    answer: "Jaipur"
  },
  {
    question: "12. Dilwara Jain Mandir kaha hai?",
    options: ["Mount Abu", "Jaipur", "Ajmer", "Bikaner"],
    answer: "Mount Abu"
  },
  {
    question: "13. Ranthambore National Park kis district me hai?",
    options: ["Sawai Madhopur", "Alwar", "Jaipur", "Bharatpur"],
    answer: "Sawai Madhopur"
  },
  {
    question: "14. Keoladeo National Park kaha hai?",
    options: ["Bharatpur", "Jodhpur", "Kota", "Udaipur"],
    answer: "Bharatpur"
  },
  {
    question: "15. Rajasthan ki sabse unchi choti kaunsi hai?",
    options: ["Guru Shikhar", "Mount Abu", "Aravali", "Kumbhalgarh"],
    answer: "Guru Shikhar"
  },

  {
    question: "16. Aravali range kis direction me hai?",
    options: ["South-West to North-East", "East-West", "North-South", "Circular"],
    answer: "South-West to North-East"
  },
  {
    question: "17. Rajasthan ka lok nritya Ghoomar kis region se hai?",
    options: ["Mewar", "Marwar", "Hadoti", "Shekhawati"],
    answer: "Mewar"
  },
  {
    question: "18. Rajasthan ka famous Desert Festival kaha hota hai?",
    options: ["Jaisalmer", "Jaipur", "Udaipur", "Ajmer"],
    answer: "Jaisalmer"
  },
  {
    question: "19. Rajasthan ka sabse bada fort kaunsa hai?",
    options: ["Chittorgarh", "Amber", "Mehrangarh", "Junagarh"],
    answer: "Chittorgarh"
  },
  {
    question: "20. Rajasthan ki Lake City kaunsi hai?",
    options: ["Udaipur", "Jaipur", "Ajmer", "Jodhpur"],
    answer: "Udaipur"
  },

  {
    question: "21. Rajasthan ka rajya geet kisne likha?",
    options: ["Allil Khan", "Bankidas", "Suryamal Mishran", "Kanhaiyalal Sethia"],
    answer: "Kanhaiyalal Sethia"
  },
  {
    question: "22. Rajasthan ka famous fort Mehrangarh kaha hai?",
    options: ["Jodhpur", "Jaipur", "Bikaner", "Kota"],
    answer: "Jodhpur"
  },
  {
    question: "23. Amber Fort kaha hai?",
    options: ["Jaipur", "Udaipur", "Ajmer", "Jaisalmer"],
    answer: "Jaipur"
  },
  {
    question: "24. Rajasthan ka sabse bada dam kaunsa hai?",
    options: ["Bisalpur", "Rana Pratap Sagar", "Mahi", "Jawahar Sagar"],
    answer: "Bisalpur"
  },
  {
    question: "25. Rajasthan ka famous Kumbhalgarh Fort kis district me hai?",
    options: ["Rajsamand", "Jaipur", "Bikaner", "Barmer"],
    answer: "Rajsamand"
  },

  {
    question: "26. Rajasthan ka sabse bada wildlife sanctuary kaunsa hai?",
    options: ["Desert National Park", "Sariska", "Ranthambore", "Bharatpur"],
    answer: "Desert National Park"
  },
  {
    question: "27. Sariska Tiger Reserve kis district me hai?",
    options: ["Alwar", "Jaipur", "Jodhpur", "Kota"],
    answer: "Alwar"
  },
  {
    question: "28. Rajasthan ka sabse bada mela kaunsa hai?",
    options: ["Pushkar Mela", "Gangaur", "Teej", "Desert Festival"],
    answer: "Pushkar Mela"
  },
  {
    question: "29. Rajasthan ka famous festival Gangaur kis devi se sambandhit hai?",
    options: ["Parvati", "Lakshmi", "Saraswati", "Durga"],
    answer: "Parvati"
  },
  {
    question: "30. Rajasthan ka lok nritya Kalbeliya kis se juda hai?",
    options: ["Sapera Samaj", "Rajput", "Brahmin", "Meena"],
    answer: "Sapera Samaj"
  },         
  {
    question: "31. Rajasthan ka sabse bada utsav Teej kis city me famous hai?",
    options: ["Jaipur", "Jodhpur", "Bikaner", "Kota"],
    answer: "Jaipur"
  },
  {
    question: "32. Rajasthan ka famous fair 'Camel Festival' kaha hota hai?",
    options: ["Bikaner", "Ajmer", "Udaipur", "Alwar"],
    answer: "Bikaner"
  },
  {
    question: "33. Rajasthan me 'Blue City' kise kaha jata hai?",
    options: ["Jodhpur", "Jaipur", "Udaipur", "Ajmer"],
    answer: "Jodhpur"
  },
  {
    question: "34. Rajasthan me 'Golden City' kaunsi hai?",
    options: ["Jaisalmer", "Bikaner", "Kota", "Alwar"],
    answer: "Jaisalmer"
  },
  {
    question: "35. Rajasthan me 'Pink City' kaunsi hai?",
    options: ["Jaipur", "Jodhpur", "Udaipur", "Bharatpur"],
    answer: "Jaipur"
  },

  {
    question: "36. Rajasthan ka sabse bada lake kaunsa hai?",
    options: ["Sambhar Lake", "Pichola", "Fateh Sagar", "Ana Sagar"],
    answer: "Sambhar Lake"
  },
  {
    question: "37. Sambhar Lake kis district me hai?",
    options: ["Jaipur", "Udaipur", "Jaisalmer", "Kota"],
    answer: "Jaipur"
  },
  {
    question: "38. Rajasthan ka famous Ana Sagar Lake kaha hai?",
    options: ["Ajmer", "Jaipur", "Bikaner", "Alwar"],
    answer: "Ajmer"
  },
  {
    question: "39. Rajasthan ka famous Lake Pichola kaha hai?",
    options: ["Udaipur", "Jaipur", "Jodhpur", "Kota"],
    answer: "Udaipur"
  },
  {
    question: "40. Rajasthan me Mahi River kis region me bahti hai?",
    options: ["Southern Rajasthan", "Northern Rajasthan", "Western Rajasthan", "Eastern Rajasthan"],
    answer: "Southern Rajasthan"
  },

  {
    question: "41. Rajasthan ka famous dance 'Bhavai' kis se juda hai?",
    options: ["Folk Dance", "Classical Dance", "Western Dance", "Modern Dance"],
    answer: "Folk Dance"
  },
  {
    question: "42. Rajasthan ka famous food 'Dal Baati Churma' kis state ka hai?",
    options: ["Rajasthan", "Gujarat", "Punjab", "MP"],
    answer: "Rajasthan"
  },
  {
    question: "43. Rajasthan ka famous sweet 'Ghevar' kis city ka hai?",
    options: ["Jaipur", "Jaisalmer", "Kota", "Bikaner"],
    answer: "Jaipur"
  },
  {
    question: "44. Rajasthan ka famous temple 'Brahma Mandir' kaha hai?",
    options: ["Pushkar", "Jaipur", "Udaipur", "Jodhpur"],
    answer: "Pushkar"
  },
  {
    question: "45. Pushkar Lake kis district me hai?",
    options: ["Ajmer", "Jaipur", "Alwar", "Barmer"],
    answer: "Ajmer"
  },

  {
    question: "46. Rajasthan ka famous fort 'Junagarh Fort' kaha hai?",
    options: ["Bikaner", "Jaipur", "Udaipur", "Alwar"],
    answer: "Bikaner"
  },
  {
    question: "47. Rajasthan ka famous fort 'Sonar Quila' kaha hai?",
    options: ["Jaisalmer", "Jaipur", "Ajmer", "Kota"],
    answer: "Jaisalmer"
  },
  {
    question: "48. Rajasthan me famous 'Taragarh Fort' kaha hai?",
    options: ["Ajmer", "Bikaner", "Jaipur", "Barmer"],
    answer: "Ajmer"
  },
  {
    question: "49. Rajasthan ka famous 'City Palace' kaha hai?",
    options: ["Udaipur", "Kota", "Ajmer", "Alwar"],
    answer: "Udaipur"
  },
  {
    question: "50. Rajasthan ka famous 'Albert Hall Museum' kaha hai?",
    options: ["Jaipur", "Jodhpur", "Bikaner", "Udaipur"],
    answer: "Jaipur"
  },

  {
    question: "51. Rajasthan ka famous 'Gadsisar Lake' kaha hai?",
    options: ["Jaisalmer", "Jaipur", "Ajmer", "Kota"],
    answer: "Jaisalmer"
  },
  {
    question: "52. Rajasthan ka famous festival 'Mewar Festival' kaha hota hai?",
    options: ["Udaipur", "Jaipur", "Ajmer", "Bikaner"],
    answer: "Udaipur"
  },
  {
    question: "53. Rajasthan ka famous festival 'Marwar Festival' kaha hota hai?",
    options: ["Jodhpur", "Jaipur", "Udaipur", "Alwar"],
    answer: "Jodhpur"
  },
  {
    question: "54. Rajasthan me 'Shekhawati' region kis art ke liye famous hai?",
    options: ["Fresco Paintings", "Modern Art", "Stone Art", "Glass Art"],
    answer: "Fresco Paintings"
  },
  {
    question: "55. Rajasthan ka famous temple 'Eklingji' kaha hai?",
    options: ["Udaipur", "Jaipur", "Ajmer", "Kota"],
    answer: "Udaipur"
  },

  {
    question: "56. Rajasthan me 'Bhangarh Fort' kis district me hai?",
    options: ["Alwar", "Jaipur", "Bikaner", "Jaisalmer"],
    answer: "Alwar"
  },
  {
    question: "57. Rajasthan ka famous 'Sariska Sanctuary' kis district me hai?",
    options: ["Alwar", "Ajmer", "Kota", "Barmer"],
    answer: "Alwar"
  },
  {
    question: "58. Rajasthan ka famous dam 'Rana Pratap Sagar' kis river par hai?",
    options: ["Chambal", "Luni", "Banas", "Mahi"],
    answer: "Chambal"
  },
  {
    question: "59. Rajasthan me 'Jawahar Sagar Dam' kis river par hai?",
    options: ["Chambal", "Mahi", "Luni", "Banas"],
    answer: "Chambal"
  },
  {
    question: "60. Rajasthan ka famous 'Bisalpur Dam' kis river par hai?",
    options: ["Banas", "Luni", "Chambal", "Mahi"],
    answer: "Banas"
  },
  
  ] ;
