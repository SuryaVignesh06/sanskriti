export interface IndianState {
  key: string;
  name: string;
  capital: string;
  region: 'North' | 'South' | 'East' | 'West' | 'Central' | 'North East' | 'UT';
  description: string;
  image: string;
  bannerImage: string;
  danceForms: string[];
  deities: string[];
  cuisines: string[];
  festivals: string[];
  crafts: string[];
  historyHighlight: string;
  youtubeVideoId?: string;
  highlighted?: boolean;
  language?: string;
  architecture?: string[];
  textiles?: string[];
  art?: string[];
  literature?: string;
  traditions?: string[];
  natureAndWildlife?: string[];
  majorDestinations?: string[];
  lesserKnownDestinations?: string[];
}

export interface Destination {
  slug: string;
  stateKey: string;
  name: string;
  type: 'Iconic' | 'Hidden';
  location: string;
  illustration: string;
  culturalSummary: string;
  category: string;
  bestSeason: string;
  whyItMatters: string;
  whatToSee: string[];
  nearbyExperiences?: string[];
  guideAvailability?: boolean;
}

export interface GuideProfile {
  slug: string;
  name: string;
  type: string;
  city: string;
  stateKey: string;
  languages: string[];
  specialties: string[];
  verified: boolean;
  experienceCount: number;
  rating: number;
  reviewsCount: number;
  avatar: string;
  about: string;
  experiencesOffered?: string[];
}

export interface CulturalAmbassador {
  id: string;
  name: string;
  location: string;
  stateKey: string;
  specialty: string;
  quote: string;
  bio: string;
  verified: boolean;
  avatar: string;
  rating: number;
  reviewsCount: number;
  experiencesCount: number;
  languages: string[];
  joinedYear: number;
}

export interface CulturalExperience {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  stateKey: string;
  hostId: string;
  category: 'Festivals' | 'Food' | 'Crafts' | 'Music & Dance' | 'Traditions' | 'Local Life' | 'Heritage';
  type: 'In-person' | 'Online Live';
  priceINR: number;
  duration: string;
  groupSize: string;
  image: string;
  gallery: string[];
  description: string;
  itinerary: { time: string; activity: string }[];
  inclusions: string[];
  guidelines: string[];
  rating: number;
  reviewsCount: number;
  upcomingDates: string[];
  featured?: boolean;
}

export interface FestivalItem {
  id: string;
  name: string;
  tagline: string;
  month: string;
  season: string;
  stateKeys: string[];
  locations: string[];
  description: string;
  significance: string;
  howLocalsCelebrate: string;
  image: string;
  experienceIds: string[];
}

export interface OnlineClass {
  id: string;
  title: string;
  category: 'Food' | 'Language' | 'Dance' | 'Music' | 'Traditions' | 'Craft';
  hostName: string;
  hostAvatar: string;
  stateKey: string;
  liveDate: string;
  duration: string;
  skillLevel: 'Beginner' | 'Intermediate' | 'All Levels';
  capacity: string;
  priceINR: number;
  image: string;
  overview: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface CulturalQuiz {
  id: string;
  title: string;
  category: string;
  stateKey?: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  description: string;
  image: string;
  passingScorePercent: number;
  badgeAwarded: string;
  questions: QuizQuestion[];
}

export interface StoryArticle {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  authorRole: string;
  authorAvatar: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  excerpt: string;
  content: string[];
  featured?: boolean;
}

// ==========================================
// MOCK DATASETS
// ==========================================

export const INDIAN_STATES: IndianState[] = [
  {
    key: 'andhra-pradesh',
    name: 'Andhra Pradesh',
    capital: 'Amaravati',
    region: 'South',
    description: 'Home to the classical Kuchipudi dance, spiritual Tirupati temple, and rich Godavari culinary traditions.',
    image: 'https://images.unsplash.com/photo-1600100397608-f010e620a8ca?q=80&w=800&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1600&auto=format&fit=crop',
    danceForms: ['Kuchipudi', 'Vilasini Natyam', 'Bhamakalapam', 'Lambadi'],
    deities: ['Lord Venkateswara (Tirupati)', 'Kanaka Durga (Vijayawada)', 'Mallikarjuna (Srisailam)'],
    cuisines: ['Guntur Gongura Pachadi', 'Pulihora', 'Royyala Iguru', 'Pootharekulu'],
    festivals: ['Sankranti', 'Ugadi', 'Tirumala Brahmotsavam', 'Deccan Festival'],
    crafts: ['Kalamkari Textiles', 'Kondapalli Toys', 'Etikoppaka Lacquerware', 'Dharmavaram Silk'],
    historyHighlight: 'Flourished under the Satavahanas, Cholas, and Vijayanagara Kings with centuries of temple architecture and classical arts.',
    highlighted: true
  },
  {
    key: 'rajasthan',
    name: 'Rajasthan',
    capital: 'Jaipur',
    region: 'North',
    description: 'The land of royal forts, Ghoomar dance, vibrant Holi celebrations, and living artisan heritage.',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?q=80&w=1600&auto=format&fit=crop',
    danceForms: ['Ghoomar', 'Kalbelia', 'Chari', 'Kachchhi Ghori'],
    deities: ['Karni Mata', 'Brahma (Pushkar)', 'Shreenathji (Nathdwara)', 'Eklingji'],
    cuisines: ['Dal Baati Churma', 'Laal Maas', 'Gatte Ki Sabzi', 'Ghevar'],
    festivals: ['Holi in Jaipur', 'Pushkar Camel Fair', 'Teej', 'Desert Festival Jaisalmer'],
    crafts: ['Block Printing (Bagru & Sanganer)', 'Blue Pottery', 'Gotapatti Embroidery', 'Puppet Making'],
    historyHighlight: 'Famed for Rajput valor, grand palaces, and desert trading routes along the Silk Road legacy.',
    highlighted: true
  },
  {
    key: 'kerala',
    name: 'Kerala',
    capital: 'Thiruvananthapuram',
    region: 'South',
    description: 'God’s Own Country, famed for Kathakali, Mohiniyattam, Onam boat races, and spice-rich cuisine.',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1600&auto=format&fit=crop',
    danceForms: ['Kathakali', 'Mohiniyattam', 'Theyyam', 'Koodiyattam'],
    deities: ['Lord Ayyappa (Sabarimala)', 'Guruvayurappan', 'Padmanabhaswamy'],
    cuisines: ['Sadya', 'Appam with Stew', 'Fish Molee', 'Puttu and Kadala Curry'],
    festivals: ['Onam', 'Vishu', 'Thrissur Pooram', 'Aranmula Snake Boat Race'],
    crafts: ['Aranmula Kannadi (Metal Mirror)', 'Coir Handicrafts', 'Nettur Petti Jewelry Box', 'Wood Carving'],
    historyHighlight: 'Ancient maritime spice port trading with Romans, Arabs, and Chinese since antiquity.',
    highlighted: true
  },
  {
    key: 'tamil-nadu',
    name: 'Tamil Nadu',
    capital: 'Chennai',
    region: 'South',
    description: 'Cradle of Bharatanatyam, majestic Dravidian Gopurams, Carnatic music, and Pongal festivities.',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1621831971412-d248ff0648ad?q=80&w=1600&auto=format&fit=crop',
    danceForms: ['Bharatanatyam', 'Karagattam', 'Kavadi Aattam', 'Therukoothu'],
    deities: ['Meenakshi Amman (Madurai)', 'Nataraja (Chidambaram)', 'Ranganathaswamy (Srirangam)'],
    cuisines: ['Idli Dosa Sambhar', 'Chettinad Chicken', 'Kanchipuram Idli', 'Filter Coffee'],
    festivals: ['Pongal', 'Mahamaham', 'Thyagaraja Aradhana', 'Kanthuri Festival'],
    crafts: ['Kanchipuram Silk Sarees', 'Tanjore Gold Leaf Painting', 'Swamimalai Bronze Icons'],
    historyHighlight: 'Glorious maritime empires of Cholas, Pandyas, and Pallavas who built monumental stone temples.',
    highlighted: true
  },
  {
    key: 'punjab',
    name: 'Punjab',
    capital: 'Chandigarh',
    region: 'North',
    description: 'Land of Five Rivers, high-energy Bhangra, Golden Temple spirituality, and Phulkari embroidery.',
    image: 'https://images.unsplash.com/photo-1609946727702-86103328e188?q=80&w=800&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1609946727702-86103328e188?q=80&w=1600&auto=format&fit=crop',
    danceForms: ['Bhangra', 'Giddha', 'Jhumar', 'Gatka'],
    deities: ['Sri Harmandir Sahib (Golden Temple)', 'Gurdwara Anandpur Sahib'],
    cuisines: ['Sarson Ka Saag & Makki Di Roti', 'Butter Chicken', 'Amritsari Kulcha', 'Lassi'],
    festivals: ['Baisakhi', 'Lohri', 'Hola Mohalla', 'Gurpurab'],
    crafts: ['Phulkari Embroidery', 'Amritsari Jutti', 'Wood & Brass Work'],
    historyHighlight: 'Rich heritage of Sikh Gurus, agricultural pioneer spirit, and historic Silk Road crossroad.',
    highlighted: true
  },
  {
    key: 'uttar-pradesh',
    name: 'Uttar Pradesh',
    capital: 'Lucknow',
    region: 'North',
    description: 'Spiritual heartland of Varanasi ghats, Kathak dance heritage, Braj Holi, and Awadhi culinary elegance.',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=800&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1600&auto=format&fit=crop',
    danceForms: ['Kathak', 'Raslila', 'Charkula', 'Nautanki'],
    deities: ['Kashi Vishwanath (Varanasi)', 'Ram Lalla (Ayodhya)', 'Krishna (Mathura)'],
    cuisines: ['Lucknawi Biryani', 'Tanday Kebab', 'Bedmi Poori', 'Banarasi Paan'],
    festivals: ['Lathmar Holi Vrindavan', 'Kumbh Mela', 'Dev Deepawali Varanasi', 'Taj Mahotsav'],
    crafts: ['Banarasi Brocade Silk', 'Chikan Embroidery', 'Brassware of Moradabad', 'Zardozi Work'],
    historyHighlight: 'Cradle of ancient Indian philosophy, Vedic knowledge, and Mughal architecture.',
    highlighted: true
  },
  {
    key: 'west-bengal',
    name: 'West Bengal',
    capital: 'Kolkata',
    region: 'East',
    description: 'Cultural capital of art and literature, grand Durga Puja celebrations, Rabindra Sangeet, and Baul music.',
    image: 'https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=800&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=1600&auto=format&fit=crop',
    danceForms: ['Gaudiya Nritya', 'Chhau Dance (Purulia)', 'Brita Dance', 'Santhali Dance'],
    deities: ['Kalighat Kali', 'Dakshineswar Kali', 'Tarapith'],
    cuisines: ['Machher Jhol', 'Shorshe Ilish', 'Kolkata Kathi Roll', 'Rasgulla & Sandesh'],
    festivals: ['Durga Puja', 'Poila Boishakh', 'Poush Mela Shantiniketan', 'Dolyatra'],
    crafts: ['Terracotta Art (Bankura)', 'Dokra Metal Craft', 'Baluchari Saree', 'Kantha Embroidery'],
    historyHighlight: 'Birthplace of the Indian Renaissance, Nobel laureates Rabindranath Tagore and Swami Vivekananda.',
    highlighted: true
  },
  {
    key: 'maharashtra',
    name: 'Maharashtra',
    capital: 'Mumbai',
    region: 'West',
    description: 'Land of Maratha warrior heritage, grand Ganesh Chaturthi, Lavani dance, and Ajanta Ellora cave art.',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=800&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=1600&auto=format&fit=crop',
    danceForms: ['Lavani', 'Koli Dance', 'Powada', 'Dhangari Gaja'],
    deities: ['Siddhivinayak Mumbai', 'Vithoba Pandharpur', 'Shirdi Sai Baba', 'Trimbakeshwar Shiva'],
    cuisines: ['Puran Poli', 'Misal Pav', 'Vada Pav', 'Modak'],
    festivals: ['Ganesh Chaturthi', 'Gudi Padwa', 'Shivaji Jayanti', 'Ellora Ajanta Festival'],
    crafts: ['Paithani Sarees', 'Warli Tribal Painting', 'Kolhapuri Chappal'],
    historyHighlight: 'Empire of Chhatrapati Shivaji Maharaj and ancient rock-cut Buddhist and Hindu cave architecture.',
    highlighted: true
  },
  {
    key: 'gujarat',
    name: 'Gujarat',
    capital: 'Gandhinagar',
    region: 'West',
    description: 'Vibrant land of Garba & Dandiya Raas, Navratri celebrations, Rann Utsav, and Bandhani textiles.',
    image: 'https://images.unsplash.com/photo-1609946727702-86103328e188?q=80&w=800&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1609946727702-86103328e188?q=80&w=1600&auto=format&fit=crop',
    danceForms: ['Garba', 'Dandiya Raas', 'Tippani', 'Bhavai Drama'],
    deities: ['Somnath Temple', 'Dwarkadhish Temple', 'Sun Temple Modhera'],
    cuisines: ['Gujarati Thali', 'Dhokla & Khandvi', 'Thepla', 'Undhiyu'],
    festivals: ['Navratri Garba', 'International Kite Festival (Uttarayan)', 'Rann Utsav Kutch'],
    crafts: ['Patola Saree (Patan)', 'Bandhani Tie-Dye', 'Kutch Kutchi Embroidery', 'Rogan Art'],
    historyHighlight: 'Legacy of Mahatma Gandhi, ancient Indus Valley Port Lothal, and mercantile heritage.'
  },
  {
    key: 'karnataka',
    name: 'Karnataka',
    capital: 'Bengaluru',
    region: 'South',
    description: 'Heritage land of Mysore Dasara, Yakshagana folk theatre, Hoysala stone sculpture, and sandalwood.',
    image: 'https://images.unsplash.com/photo-1600100397608-f010e620a8ca?q=80&w=800&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1600100397608-f010e620a8ca?q=80&w=1600&auto=format&fit=crop',
    danceForms: ['Yakshagana', 'Dollu Kunitha', 'Veeragase', 'Kamsale'],
    deities: ['Chamundeshwari Mysore', 'Krishna Udupi', 'Murudeshwara Shiva', 'Gommateshwara Shravanabelagola'],
    cuisines: ['Bisi Bele Bath', 'Mysore Pak', 'Neer Dosa', 'Ragi Mudde'],
    festivals: ['Mysore Dasara', 'Kambala Buffalo Race', 'Hampi Utsav', 'Ugadi'],
    crafts: ['Mysore Silk Sarees', 'Channapatna Wooden Toys', 'Bidriware Metal Craft'],
    historyHighlight: 'Empires of Chalukyas, Rashtrakutas, Hoysalas, and Vijayanagara centered in Hampi.'
  },
  {
    key: 'assam',
    name: 'Assam',
    capital: 'Dispur',
    region: 'North East',
    description: 'Land of Bihu dance, Kamakhya temple, golden Muga silk, and lush Brahmaputra tea gardens.',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600&auto=format&fit=crop',
    danceForms: ['Bihu Dance', 'Sattriya Classical Dance', 'Jhumur', 'Deodhani'],
    deities: ['Kamakhya Temple Guwahati', 'Umananda Temple', 'Hayagriva Madhava'],
    cuisines: ['Khaar', 'Masor Tenga (Sour Fish Curry)', 'Duck Meat Curry', 'Pitha Sweets'],
    festivals: ['Rongali Bihu', 'Bhogali Bihu', 'Ambubachi Mela', 'Majuli Music Festival'],
    crafts: ['Muga & Mekhela Chador Silk', 'Bamboo & Cane Craft', 'Bell Metal Craft (Sarthebari)'],
    historyHighlight: '600-year undefeated reign of the Ahom Dynasty along the mighty Brahmaputra river.'
  },
  {
    key: 'odisha',
    name: 'Odisha',
    capital: 'Bhubaneswar',
    region: 'East',
    description: 'Land of Odissi classical dance, Jagannath Puri Ratha Yatra, Konark Sun Temple, and Pattachitra paintings.',
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=800&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1600&auto=format&fit=crop',
    danceForms: ['Odissi', 'Gotipua', 'Chhau (Mayurbhanj)', 'Sambalpuri Folk'],
    deities: ['Jagannath Temple Puri', 'Lingaraj Bhubaneswar', 'Konark Sun Temple'],
    cuisines: ['Dalma', 'Pakhala Bhata', 'Chhena Poda', 'Rasagola (Puri style)'],
    festivals: ['Puri Ratha Yatra', 'Raja Parba', 'Konark Dance Festival', 'Nuakhai'],
    crafts: ['Pattachitra Cloth Painting', 'Silver Filigree (Tarakasi)', 'Sambalpuri Ikat', 'Pipli Applique Work'],
    historyHighlight: 'Ancient Kalinga maritime history and centuries of temple sculpture craftsmanship.'
  },
  {
    key: 'goa',
    name: 'Goa',
    capital: 'Panaji',
    region: 'West',
    description: 'Blend of Konkani culture, Indo-Portuguese heritage, Shigmo festival, and coastal folk traditions.',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1600&auto=format&fit=crop',
    danceForms: ['Fugdi', 'Dekhnni', 'Corridinho', 'Dhalo'],
    deities: ['Shanta Durga', 'Mangeshi Temple', 'Basilica of Bom Jesus'],
    cuisines: ['Goan Fish Curry Rice', 'Vindaloo', 'Bebinca', 'Xacuti'],
    festivals: ['Goa Carnival', 'Shigmo', 'Sao Joao Festival', 'Feast of St. Francis Xavier'],
    crafts: ['Azulejo Hand-painted Tiles', 'Brass Metalwork', 'Shell Crafts', 'Clay Pottery'],
    historyHighlight: 'Centuries of unique Konkani-Portuguese cultural synthesis and coastal trade.'
  },
  {
    key: 'bihar',
    name: 'Bihar',
    capital: 'Patna',
    region: 'East',
    description: 'Land of Mahavira and Buddha’s enlightenment, sacred Chhath Puja, and world-renowned Madhubani painting.',
    image: 'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?q=80&w=800&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?q=80&w=1600&auto=format&fit=crop',
    danceForms: ['Jat-Jatin', 'Bidesia', 'Domkach', 'Jhijhiya'],
    deities: ['Mahabodhi Temple (Bodh Gaya)', 'Mahavir Mandir Patna', 'Vishnupad Temple Gaya'],
    cuisines: ['Litti Chokha', 'Sattu Paratha', 'Khaja (Rajgir)', 'Tilkut'],
    festivals: ['Chhath Puja', 'Sonepur Cattle Fair', 'Pitrapaksha Mela Gaya', 'Rajgir Mahotsav'],
    crafts: ['Madhubani / Mithila Painting', 'Manjusha Art', 'Sikki Grass Craft', 'Bhagalpuri Tussar Silk'],
    historyHighlight: 'Ancient Magadha Empire, Nalanda World University, and birthland of Jainism and Buddhism.'
  },
  {
    key: 'madhya-pradesh',
    name: 'Madhya Pradesh',
    capital: 'Bhopal',
    region: 'Central',
    description: 'The Heart of India, famed for Khajuraho temples, Sanchi Stupa, Gond tribal art, and Malwa cuisine.',
    image: 'https://images.unsplash.com/photo-1600100397608-f010e620a8ca?q=80&w=800&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1600100397608-f010e620a8ca?q=80&w=1600&auto=format&fit=crop',
    danceForms: ['Matki Dance', 'Gaur Maria', 'Jawara', 'Tertali'],
    deities: ['Mahakaleshwar Jyotirlinga (Ujjain)', 'Omkareshwar Shiva', 'Khajuraho Temples'],
    cuisines: ['Poha Jalebi', 'Bhutte Ka Kees', 'Dal Bafla', 'Mawa Bati'],
    festivals: ['Khajuraho Dance Festival', 'Tansen Music Festival Gwalior', 'Lokrang Bhopal', 'Ujjain Simhastha Kumbh'],
    crafts: ['Chanderi & Maheshwari Sarees', 'Gond Tribal Art', 'Batik Print Ujjain', 'Dhakad Metalwork'],
    historyHighlight: 'Central hub of Maurya, Gupta, and Maratha dynasties with prehistoric Bhimbetka cave paintings.'
  },
  {
    key: 'himachal-pradesh',
    name: 'Himachal Pradesh',
    capital: 'Shimla',
    region: 'North',
    description: 'Devbhoomi (Land of Gods), celebrated for Kullu Nati dance, Pahari paintings, and mountain festivals.',
    image: 'https://images.unsplash.com/photo-1562670652-e5947bddb335?q=80&w=800&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1562670652-e5947bddb335?q=80&w=1600&auto=format&fit=crop',
    danceForms: ['Kullu Nati', 'Dangi', 'Chham Dance (Tibetan Monastic)', 'Rakshasa Dance'],
    deities: ['Hadimba Temple Manali', 'Jwala Ji Kangra', 'Chintpurni', 'Bhimakali Sarahan'],
    cuisines: ['Dham (Kullu traditional feast)', 'Siddu', 'Chana Madra', 'Babru'],
    festivals: ['Kullu Dussehra', 'Mandi Shivratri', 'Losar (Tibetan New Year)', 'Minjar Fair Chamba'],
    crafts: ['Kullu & Kinnauri Shawls', 'Chamba Rumal Embroidery', 'Pahari Miniature Painting', 'Wood Carving'],
    historyHighlight: 'ancient mountain principalities and Himalayan sanctuary for Buddhist and Hindu sacred traditions.'
  },
  {
    key: 'jammu-kashmir',
    name: 'Jammu & Kashmir',
    capital: 'Srinagar / Jammu',
    region: 'UT',
    description: 'Paradise on Earth, known for Rouf dance, Vaishno Devi pilgrimage, Pashmina shawls, and Shikara heritage.',
    image: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=800&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=1600&auto=format&fit=crop',
    danceForms: ['Rouf', 'Bhand Pather', 'Kud Dance', 'Dumhal'],
    deities: ['Amarnath Cave Shiva', 'Mata Vaishno Devi Katra', 'Kheer Bhawani'],
    cuisines: ['Wazwan (Rogan Josh, Gushtaba)', 'Kahwa Tea', 'Modur Pulao', 'Dum Aloo'],
    festivals: ['Tulip Festival Srinagar', 'Shikara Festival', 'Navreh', 'Bahu Mela Jammu'],
    crafts: ['Pashmina & Kani Shawls', 'Paper Mache Art', 'Walnut Wood Carving', 'Silk Carpets'],
    historyHighlight: 'Sufi and Kashmir Shaivism spiritual fusion, historic Silk Route crossroads.'
  },
  {
    key: 'delhi',
    name: 'Delhi',
    capital: 'New Delhi',
    region: 'UT',
    description: 'The historic capital spanning seven ancient cities, Mughal monuments, Sufi qawwali, and street food legacy.',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=800&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1600&auto=format&fit=crop',
    danceForms: ['Kathak Delhi Gharana', 'Street Theater (Nukkad Natak)'],
    deities: ['Akshardham Temple', 'Nizamuddin Dargah', 'Lotus Temple', 'Kalka Ji Mandir'],
    cuisines: ['Chandni Chowk Paranthe', 'Butter Chicken', 'Chole Bhature', 'Dahi Bhalla'],
    festivals: ['Phool Walon Ki Sair', 'Qutub Festival', 'International Mango Festival', 'Republic Day Parade'],
    crafts: ['Zardozi Gold Embroidery', 'Meenakari Jewelry', 'Pottery of Blue Nizamuddin'],
    historyHighlight: 'Capital seat of Pandavas Indraprastha, Delhi Sultanate, Mughals, and modern Republic.'
  },
  {
    key: 'ladakh',
    name: 'Ladakh',
    capital: 'Leh',
    region: 'UT',
    description: 'Land of High Passes, ancient Tibetan Buddhist monasteries, Masked Chham dances, and stargazing high deserts.',
    image: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=800&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=1600&auto=format&fit=crop',
    danceForms: ['Chham Monastery Mask Dance', 'Jabro', 'Spao Dance'],
    deities: ['Hemis Monastery', 'Thiksey Monastery', 'Diskit Buddha Statue'],
    cuisines: ['Thukpa Noodle Soup', 'Momos', 'Skyu Stew', 'Butter Tea (Gur Gur Chai)'],
    festivals: ['Hemis Tsechu', 'Ladakh Festival Leh', 'Losar New Year', 'Dosmoche'],
    crafts: ['Pashmina Weaving', 'Thangka Silk Painting', 'Tibetan Copperware'],
    historyHighlight: 'Himalayan Silk Road Buddhist kingdom connecting India, Tibet, and Central Asia.'
  },
  {
    key: 'sikkim',
    name: 'Sikkim',
    capital: 'Gangtok',
    region: 'North East',
    description: 'Enchanting Himalayan state under Mount Kanchenjunga, famed for Cham dances, Rumtek monastery, and organic life.',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600&auto=format&fit=crop',
    danceForms: ['Singhi Chham (Snow Lion Dance)', 'Maruni', 'Yak Dance'],
    deities: ['Rumtek Monastery', 'Pemayangtse Monastery', 'Kirateshwar Dham'],
    cuisines: ['Phagshapa', 'Gundruk Soup', 'Momos', 'Sel Roti'],
    festivals: ['Losoong', 'Saga Dawa', 'Pang Lhabsol'],
    crafts: ['Handwoven Tibetan Carpets', 'Choktse Carved Tables', 'Lepcha Weaving'],
    historyHighlight: 'Former Namgyal Chogyal kingdom amidst high Himalayan biodiversity.'
  },
  {
    key: 'telangana',
    name: 'Telangana',
    capital: 'Hyderabad',
    region: 'South',
    description: 'Land of Charminar, Bathukamma flower festival, Perini Thandavam dance, and Hyderabadi Biryani.',
    image: 'https://images.unsplash.com/photo-1600100397608-f010e620a8ca?q=80&w=800&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1600100397608-f010e620a8ca?q=80&w=1600&auto=format&fit=crop',
    danceForms: ['Perini Sivatandavam', 'Lambadi', 'Oggu Katha'],
    deities: ['Yadadri Temple', 'Bhadrakali Warangal', 'Ramappa Temple Kakatiya'],
    cuisines: ['Hyderabadi Dum Biryani', 'Haleem', 'Sakinalu', 'Double Ka Meetha'],
    festivals: ['Bathukamma Floral Festival', 'Bonalu', 'Sammakka Sarakka Jatara'],
    crafts: ['Pochampally Ikat Sarees', 'Pemberthi Brass Craft', 'Bidriware Arts', 'Cheriyal Scroll Painting'],
    historyHighlight: 'Grand Kakatiya architecture and wealthy Qutb Shahi and Nizam heritage.'
  },
  {
    key: 'uttarakhand',
    name: 'Uttarakhand',
    capital: 'Dehradun',
    region: 'North',
    description: 'Devbhoomi of Char Dham shrines, Rishikesh yoga capital, Choliya sword dance, and Aipan traditional art.',
    image: 'https://images.unsplash.com/photo-1562670652-e5947bddb335?q=80&w=800&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1562670652-e5947bddb335?q=80&w=1600&auto=format&fit=crop',
    danceForms: ['Choliya Dance', 'Langvir Nritya', 'Barada Nati', 'Jhora'],
    deities: ['Badrinath Temple', 'Kedarnath Shiva', 'Gangotri & Yamunotri', 'Neelkanth Mahadev'],
    cuisines: ['Kafuli', 'Bhatt Ki Churkani', 'Aaloo Ke Gutke', 'Singori Sweet'],
    festivals: ['Kumbh Mela Haridwar', 'Nanda Devi Raj Jat Yatra', 'Phool Dei', 'Ganga Aarti Rishikesh'],
    crafts: ['Aipan Floor Art', 'Ringal Cane Craft', 'Wood Carving of Kumaon'],
    historyHighlight: 'Sacred source of the Ganga and Yamuna rivers, ancient Garhwal and Kumaon kingdoms.'
  },
  {
    key: 'chhattisgarh',
    name: 'Chhattisgarh',
    capital: 'Raipur',
    region: 'Central',
    description: 'Heart of Bastar tribal heritage, Panthi dance, Chitrakote falls, and ancient bell-metal Dhokra art.',
    image: 'https://images.unsplash.com/photo-1600100397608-f010e620a8ca?q=80&w=800&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1600100397608-f010e620a8ca?q=80&w=1600&auto=format&fit=crop',
    danceForms: ['Panthi Dance', 'Raut Nacha', 'Karma Dance', 'Saila'],
    deities: ['Danteshwari Temple Bastar', 'Bhoramdeo Temple', 'Bambleshwari Rajnandgaon'],
    cuisines: ['Muthia', 'Chila', 'Farra', 'Dubki Kadhi'],
    festivals: ['Bastar Dussehra (75-day festival)', 'Madai Fair', 'Bhoramdeo Mahotsav'],
    crafts: ['Bastar Dhokra Bell Metal', 'Terracotta Art', 'Wrought Iron Craft (Loha Shilp)'],
    historyHighlight: 'Rich indigenous tribal traditions preserving ancient eco-friendly art for millennia.'
  },
  {
    key: 'jharkhand',
    name: 'Jharkhand',
    capital: 'Ranchi',
    region: 'East',
    description: 'Land of Forests, famous for martial Chhau dance, Sarhul festival, and Sohrai tribal paintings.',
    image: 'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?q=80&w=800&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?q=80&w=1600&auto=format&fit=crop',
    danceForms: ['Chhau (Seraikella)', 'Jhumair', 'Paika Martial Dance', 'Agni Dance'],
    deities: ['Baidyanath Jyotirlinga Deoghar', 'Chhinnamasta Rajrappa', 'Jagannath Ranchi'],
    cuisines: ['Dhuska', 'Pittha', 'Rugra Mushroom', 'Handia'],
    festivals: ['Sarhul Spring Festival', 'Karam Festival', 'Tusu Parab', 'Hal Punhya'],
    crafts: ['Sohrai & Khovar Murals', 'Pyatkar Scroll Painting', 'Bamboo Craft'],
    historyHighlight: 'Sacred tribal lands of Birsa Munda and rich mineral-forested heritage.'
  },
  {
    key: 'meghalaya',
    name: 'Meghalaya',
    capital: 'Shillong',
    region: 'North East',
    description: 'Abode of Clouds, living root bridges of Cherrapunji, Shad Suk Mynsiem dance, and Khasi heritage.',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600&auto=format&fit=crop',
    danceForms: ['Shad Suk Mynsiem', 'Nongkrem Dance', 'Laho Dance'],
    deities: ['Nartiang Durga Temple', 'Sacred Groves of Mawphlang'],
    cuisines: ['Jadoh (Rice with Meat)', 'Dohkhlieh', 'Pukhlein', 'Nakham Bitchi'],
    festivals: ['Nongkrem Dance Festival', 'Shad Suk Mynsiem', 'Wangala Drum Festival'],
    crafts: ['Cane Mat Weaving (Tlieng)', 'Bamboo Basketry', 'Traditional Khasi Jewelry'],
    historyHighlight: 'Unique matrilineal Khasi, Jaintia, and Garo indigenous tribal societies.'
  },
  {
    key: 'nagaland',
    name: 'Nagaland',
    capital: 'Kohima',
    region: 'North East',
    description: 'Land of Festivals, world-famous Hornbill Festival, Naga warrior folk songs, and intricate handlooms.',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600&auto=format&fit=crop',
    danceForms: ['Zeliang Folk Dance', 'Butterly Dance', 'War Dance (Chang Lo)'],
    deities: ['Sacred Mount Saramati', 'Kichamung Heritage Shrines'],
    cuisines: ['Smoked Pork with Axone (Fermented Soy)', 'Bhut Jolokia Chili Chutney', 'Galho Rice Stew'],
    festivals: ['Hornbill Festival Kisama', 'Sekrenyi (Angami)', 'Moatsu (Ao)', 'Tokhu Emong'],
    crafts: ['Naga Tribal Handloom Shawls', 'Wood Carving Spears & Masks', 'Beadwork Ornaments'],
    historyHighlight: 'Rich heritage of 16 distinct Naga tribes celebrated for bravery and vibrant textiles.'
  },
  {
    key: 'manipur',
    name: 'Manipur',
    capital: 'Imphal',
    region: 'North East',
    description: 'Jewel of India, birthplace of Manipuri Classical Raas Leela dance, Polo sport, and Loktai floating lake.',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600&auto=format&fit=crop',
    danceForms: ['Manipuri Raas Leela', 'Thang-Ta Martial Art', 'Pung Cholom Drum Dance'],
    deities: ['Govindaji Temple Imphal', 'Imoinu Ahongbi', 'Lord Sanamahi'],
    cuisines: ['Eromba', 'Kangshoi Vegetable Stew', 'Singju Salad', 'Chak-Hao Kheer (Black Rice)'],
    festivals: ['Yaoshang (Manipuri Holi)', 'Lai Haraoba', 'Sangai Festival'],
    crafts: ['Shaphee Lanphee Textile', 'Longpi Black Pottery', 'Kauna Reed Craft'],
    historyHighlight: 'Ancient Meitei kingdom and cradle of Sagol Kangjei (ancient Polo).'
  },
  {
    key: 'mizoram',
    name: 'Mizoram',
    capital: 'Aizawl',
    region: 'North East',
    description: 'Land of Hill People, famous for the bamboo Cheraw dance, Chapchar Kut spring festival, and lush ridges.',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600&auto=format&fit=crop',
    danceForms: ['Cheraw (Bamboo Dance)', 'Khuallam', 'Chheihlam'],
    deities: ['Solomon’s Temple Aizawl', 'Phawngpui Sacred Peak'],
    cuisines: ['Bai (Pork and Bamboo Stew)', 'Vawksa Rep', 'Arsa Buhchiar'],
    festivals: ['Chapchar Kut Spring Festival', 'Mim Kut', 'Pawl Kut Harvest'],
    crafts: ['Puan Handloom Weaving', 'Cane Cap & Basket Making'],
    historyHighlight: 'Close-knit Mizo tribal traditions centered around music, community harmony, and nature.'
  },
  {
    key: 'tripura',
    name: 'Tripura',
    capital: 'Agartala',
    region: 'North East',
    description: 'Land of Ujjayanta Palace, Unakoti rock-cut Shiva carvings, Hojagiri balancing dance, and bamboo art.',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600&auto=format&fit=crop',
    danceForms: ['Hojagiri (Reang Tribe)', 'Garia Dance', 'Bizhu Dance'],
    deities: ['Tripura Sundari Temple Udaipur', 'Unakoti Rock Carvings', 'Fourteen Gods Temple'],
    cuisines: ['Mui Borok (Berma Fermented Fish)', 'Gudok', 'Chakhwi'],
    festivals: ['Kharchi Puja', 'Garia Puja', 'Neermahal Water Festival'],
    crafts: ['Bamboo & Cane Furniture', 'Rignai Tribal Weaving'],
    historyHighlight: 'Manikya Dynasty royal lineage spanning over five centuries.'
  },
  {
    key: 'arunachal-pradesh',
    name: 'Arunachal Pradesh',
    capital: 'Itanagar',
    region: 'North East',
    description: 'Land of the Dawn-Lit Mountains, Tawang Monastery, Apatani tribal culture, and Losar celebrations.',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600&auto=format&fit=crop',
    danceForms: ['Bardo Chham', 'Pasi Kongki', 'Aji Lamu'],
    deities: ['Tawang Buddhist Monastery', 'Malinithan Temple Shrines', 'Parasuram Kund'],
    cuisines: ['Pika Mila', 'Lukter (Smoked Beef with Chili)', 'Pechak', 'Marua Millet Beer'],
    festivals: ['Losar New Year', 'Solung (Adis)', 'Dree Festival (Apatanis)', 'Ziro Music Festival'],
    crafts: ['Monpa Wooden Masks', 'Wancho Beadwork', 'Apatani Tribal Textile'],
    historyHighlight: 'Vast pristine eastern Himalayan sanctuary for 26 major indigenous tribes.'
  },
  {
    key: 'puducherry',
    name: 'Puducherry',
    capital: 'Puducherry',
    region: 'UT',
    description: 'French Riviera of the East, Sri Aurobindo Ashram spirituality, Tamil coastal culture, and yellow colonial streets.',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1600&auto=format&fit=crop',
    danceForms: ['Garadi Folk Dance', 'Bharatanatyam Coastal Tradition'],
    deities: ['Manakula Vinayagar Temple', 'Auroville Matrimandir'],
    cuisines: ['French Crepes', 'Pondicherry Fish Curry', 'Kreyol Spiced Rice'],
    festivals: ['International Yoga Festival', 'Bastille Day Celebration', 'Mascarade Festival'],
    crafts: ['Handmade Paper Art', 'Terracotta Pottery', 'Auroville Incense'],
    historyHighlight: 'Historic French East India Company enclave intertwined with Tamil heritage.'
  }
];

export const CULTURAL_AMBASSADORS: CulturalAmbassador[] = [
  {
    id: 'meera-patel',
    name: 'Meera Patel',
    location: 'Jaipur, Rajasthan',
    stateKey: 'rajasthan',
    specialty: 'Traditional Rajasthani Cooking & Holi Celebrations',
    quote: 'Culture is not something you watch from a distance. It is something you share at a family table.',
    bio: 'Meera has lived in the heart of Jaipur for over 35 years. Her family has hosted traditional festival gatherings and home-cooking workshops for travelers seeking genuine human warmth and culinary heritage.',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
    rating: 4.98,
    reviewsCount: 142,
    experiencesCount: 3,
    languages: ['Hindi', 'English', 'Rajasthani'],
    joinedYear: 2022
  },
  {
    id: 'anjali-menon',
    name: 'Anjali Menon',
    location: 'Kochi, Kerala',
    stateKey: 'kerala',
    specialty: 'Kerala Sadya Culinary Art & Spices',
    quote: 'When you understand the spices of Kerala, you understand 3,000 years of global trade and family love.',
    bio: 'Anjali grew up surrounded by spice plantations in Fort Kochi. She is a culinary preservationist dedicated to teaching traditional multi-course Sadya meals served on fresh banana leaves.',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop',
    rating: 4.96,
    reviewsCount: 98,
    experiencesCount: 2,
    languages: ['Malayalam', 'English', 'Hindi'],
    joinedYear: 2023
  },
  {
    id: 'raghav-mishra',
    name: 'Raghav Mishra',
    location: 'Varanasi, Uttar Pradesh',
    stateKey: 'uttar-pradesh',
    specialty: 'Banaras Silk Weaving & Ghat Storytelling',
    quote: 'Varanasi speaks in the rhythm of weaving looms and the quiet morning bells on the Ganges.',
    bio: 'A fifth-generation master weaver from Varanasi, Raghav offers immersive mornings showing the intricate gold zari weaving process followed by sunrise boat stories along the ancient ghats.',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    rating: 4.99,
    reviewsCount: 176,
    experiencesCount: 4,
    languages: ['Hindi', 'English'],
    joinedYear: 2021
  },
  {
    id: 'kavita-sharma',
    name: 'Kavita Sharma',
    location: 'Vijayawada, Andhra Pradesh',
    stateKey: 'andhra-pradesh',
    specialty: 'Kuchipudi Mudras & Temple Traditions',
    quote: 'Every gesture in Kuchipudi is a sacred prayer passed down through generations.',
    bio: 'Kavita is an accomplished Kuchipudi practitioner and educator who opens her studio to travelers interested in classical mudra storytelling and regional temple music.',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=400&auto=format&fit=crop',
    rating: 4.95,
    reviewsCount: 84,
    experiencesCount: 2,
    languages: ['Telugu', 'English', 'Hindi'],
    joinedYear: 2023
  },
  {
    id: 'gurpreet-singh',
    name: 'Gurpreet Singh',
    location: 'Amritsar, Punjab',
    stateKey: 'punjab',
    specialty: 'Baisakhi Traditions & Golden Temple Seva',
    quote: 'In Punjab, hospitality is not a service. It is our spiritual honor.',
    bio: 'Gurpreet leads travelers into authentic village Baisakhi harvesting rituals, community langar kitchen service, and Phulkari embroidery workshops.',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
    rating: 4.97,
    reviewsCount: 115,
    experiencesCount: 3,
    languages: ['Punjabi', 'Hindi', 'English'],
    joinedYear: 2022
  }
];

export const CULTURAL_EXPERIENCES: CulturalExperience[] = [
  {
    id: 'holi-jaipur-family',
    title: 'Celebrate Holi with a Local Jaipur Family',
    subtitle: 'Participate in organic color play, traditional sweets preparation, and family music',
    location: 'Jaipur, Rajasthan',
    stateKey: 'rajasthan',
    hostId: 'meera-patel',
    category: 'Festivals',
    type: 'In-person',
    priceINR: 3200,
    duration: '5 hours',
    groupSize: 'Max 8 guests',
    image: 'https://images.unsplash.com/photo-1576487248805-acf45f51623a?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1576487248805-acf45f51623a?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Experience Holi far away from commercial tourist crowds. Join Meera Patel and her extended family inside their historic Jaipur Haveli courtyard. You will prepare natural herbal colors from marigold petals and beetroot, make fresh Gujiya sweets together, and participate in joyful traditional songs.',
    itinerary: [
      { time: '09:00 AM', activity: 'Warm welcome with herbal spiced tea and introduction to Holi mythology' },
      { time: '10:00 AM', activity: 'Hands-on kitchen workshop preparing Gujiya & Thandai' },
      { time: '11:30 AM', activity: 'Courtyard color celebration using organic flower gulal' },
      { time: '01:00 PM', activity: 'Shared festal Rajasthani lunch on traditional low dining tables' },
      { time: '02:00 PM', activity: 'Farewell gift exchange & personal blessings' }
    ],
    inclusions: [
      'All organic flower-based gulal colors',
      'Traditional white festive cotton Kurta provided',
      'Full home-cooked Rajasthani festive lunch & drinks',
      'Recipe booklet to take home'
    ],
    guidelines: [
      'Wear clothing you do not mind getting lightly tinted',
      'Please inform host in advance of any food allergies',
      'Respectful behavior inside family home'
    ],
    rating: 4.99,
    reviewsCount: 88,
    upcomingDates: ['March 14, 2026', 'March 15, 2026', 'March 24, 2026'],
    featured: true
  },
  {
    id: 'kerala-cooking-kochi',
    title: 'Cook Traditional Kerala Sadya Meal',
    subtitle: 'Learn spice tempering, coconut preparations, and leaf dining etiquette',
    location: 'Kochi, Kerala',
    stateKey: 'kerala',
    hostId: 'anjali-menon',
    category: 'Food',
    type: 'In-person',
    priceINR: 2800,
    duration: '4 hours',
    groupSize: 'Max 6 guests',
    image: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Immerse your senses in Kerala’s rich culinary art. Guided by Anjali Menon, you will visit a local spice garden, select fresh coconut and curry leaves, and cook 7 traditional dishes ranging from Avial to Payasam, served on fresh banana leaves.',
    itinerary: [
      { time: '10:00 AM', activity: 'Local organic spice market walk' },
      { time: '11:00 AM', activity: 'Coconut grating and spice grinding session' },
      { time: '12:15 PM', activity: 'Cooking Avial, Thoran, and Payasam' },
      { time: '01:30 PM', activity: 'Traditional banana leaf feast and leaf folding custom' }
    ],
    inclusions: [
      'Spice market ingredients & fresh banana leaf setup',
      'Full 7-course lunch',
      'Digital & printed Kerala recipe card set'
    ],
    guidelines: [
      'Comfortable cotton clothing recommended',
      'Vegetarian and vegan friendly'
    ],
    rating: 4.97,
    reviewsCount: 64,
    upcomingDates: ['March 10, 2026', 'March 18, 2026', 'April 02, 2026'],
    featured: true
  },
  {
    id: 'banaras-artisan-morning',
    title: 'Morning with a Banaras Handloom Artisan',
    subtitle: 'Witness gold zari silk weaving and sunrise ghat storytelling in Varanasi',
    location: 'Varanasi, Uttar Pradesh',
    stateKey: 'uttar-pradesh',
    hostId: 'raghav-mishra',
    category: 'Crafts',
    type: 'In-person',
    priceINR: 2500,
    duration: '4.5 hours',
    groupSize: 'Max 5 guests',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Walk through the quiet ancient lanes of Varanasi at dawn. Master weaver Raghav Mishra leads you into his family workshop where handlooms create royal Banarasi silk. Afterward, take a private wooden boat ride as the morning sun illuminates the ghats.',
    itinerary: [
      { time: '05:30 AM', activity: 'Sunrise wooden boat ride along Dashashwamedh & Manikarnika Ghats' },
      { time: '07:00 AM', activity: 'Morning chai and clay-cup breakfast in old weaver quarter' },
      { time: '08:00 AM', activity: 'Handloom weaving demonstration & trying the shuttle' },
      { time: '09:30 AM', activity: 'Understanding silk motif symbols & history session' }
    ],
    inclusions: [
      'Private boat trip on the Ganges',
      'Traditional breakfast & Banarasi chai',
      'Small woven silk souvenir bookmark'
    ],
    guidelines: [
      'Early morning start required',
      'Modest attire suitable for sacred ghats'
    ],
    rating: 4.99,
    reviewsCount: 112,
    upcomingDates: ['March 12, 2026', 'March 20, 2026', 'March 28, 2026'],
    featured: true
  },
  {
    id: 'kuchipudi-dance-andhra',
    title: 'Kuchipudi Mudras & Temple Dance Workshop',
    subtitle: 'Learn classical Indian expressions and rhythmic footwork in Vijayawada',
    location: 'Vijayawada, Andhra Pradesh',
    stateKey: 'andhra-pradesh',
    hostId: 'kavita-sharma',
    category: 'Music & Dance',
    type: 'In-person',
    priceINR: 2200,
    duration: '3 hours',
    groupSize: 'Max 10 guests',
    image: 'https://images.unsplash.com/photo-1600100397608-f010e620a8ca?q=80&w=1000&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1600100397608-f010e620a8ca?q=80&w=1000&auto=format&fit=crop'],
    description: 'Discover the drama and grace of Kuchipudi. Kavita Sharma teaches the fundamental hand mudras, eye movements (Drishti Bheda), and brass plate footwork that make Andhra dance world famous.',
    itinerary: [
      { time: '04:00 PM', activity: 'Introduction to Kuchipudi heritage and temple origin stories' },
      { time: '04:45 PM', activity: 'Mudra practice session for hand gestures' },
      { time: '05:45 PM', activity: 'Basic rhythmic adavus and brass plate dance demonstration' },
      { time: '06:45 PM', activity: 'Q&A over fresh filter coffee and traditional sweets' }
    ],
    inclusions: ['Guided dance workshop', 'Illustrated Mudra reference guide', 'Refreshments'],
    guidelines: ['Wear loose, comfortable cotton clothes suitable for movement'],
    rating: 4.95,
    reviewsCount: 42,
    upcomingDates: ['March 16, 2026', 'March 22, 2026'],
    featured: false
  },
  {
    id: 'baisakhi-punjab-village',
    title: 'Celebrate Baisakhi in a Rural Punjab Village',
    subtitle: 'Join wheat harvest celebrations, Bhangra drums, and village langar service',
    location: 'Amritsar, Punjab',
    stateKey: 'punjab',
    hostId: 'gurpreet-singh',
    category: 'Festivals',
    type: 'In-person',
    priceINR: 3500,
    duration: '6 hours',
    groupSize: 'Max 12 guests',
    image: 'https://images.unsplash.com/photo-1609946727702-86103328e188?q=80&w=1000&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1609946727702-86103328e188?q=80&w=1000&auto=format&fit=crop'],
    description: 'Feel the vibrant pulse of Punjab during Baisakhi. Gurpreet Singh invites you to his family farm outside Amritsar to experience yellow mustard fields, dhol drumming, Bhangra dancing, and cooking Sarson Ka Saag.',
    itinerary: [
      { time: '09:00 AM', activity: 'Farm arrival & sugarcane juice welcome' },
      { time: '10:00 AM', activity: 'Wheat harvesting participation & tractor ride' },
      { time: '11:30 AM', activity: 'Live Dhol drum beats & basic Bhangra dance lesson' },
      { time: '01:00 PM', activity: 'Open-air village feast with Makki Roti & fresh white butter' },
      { time: '02:30 PM', activity: 'Phulkari embroidery demonstration by village elder women' }
    ],
    inclusions: ['Farm transport from Amritsar', 'Village feast & beverages', 'Turban or dupatta styling'],
    guidelines: ['Sun protection and outdoor footwear recommended'],
    rating: 4.98,
    reviewsCount: 76,
    upcomingDates: ['April 13, 2026', 'April 14, 2026'],
    featured: true
  }
];

export const FESTIVALS_LIST: FestivalItem[] = [
  {
    id: 'holi',
    name: 'Holi',
    tagline: 'The Festival of Colors & Spring Revival',
    month: 'March',
    season: 'Spring',
    stateKeys: ['rajasthan', 'uttar-pradesh', 'punjab', 'delhi'],
    locations: ['Jaipur', 'Vrindavan', 'Mathura', 'Delhi'],
    description: 'Holi marks the arrival of spring and the victory of devotion over arrogance. Across India, communities come together to throw vibrant gulal colors, sing traditional folk songs, and share sweet Gujiya.',
    significance: 'Celebrates the divine love of Radha and Krishna and the legend of Prahlad’s triumph through unshakeable faith.',
    howLocalsCelebrate: 'Families gather in courtyards at dawn, light the sacred Holika bonfire the night prior, play with organic colors, and share spiced Thandai drinks.',
    image: 'https://images.unsplash.com/photo-1576487248805-acf45f51623a?q=80&w=1000&auto=format&fit=crop',
    experienceIds: ['holi-jaipur-family']
  },
  {
    id: 'pongal',
    name: 'Pongal',
    tagline: 'Harvest Thanksgiving to Sun & Nature',
    month: 'January',
    season: 'Winter',
    stateKeys: ['tamil-nadu', 'andhra-pradesh', 'puducherry'],
    locations: ['Madurai', 'Chennai', 'Vijayawada'],
    description: 'A four-day harvest festival where sweet rice and milk boil over clay pots to symbolize overflowing prosperity and gratitude to the Sun God.',
    significance: 'Marks the harvest season and the sun’s northern journey (Uttarayan).',
    howLocalsCelebrate: 'Homes are decorated with intricate Kolam rice powder artwork, farm animals are honored, and sweet sugarcane is shared.',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1000&auto=format&fit=crop',
    experienceIds: []
  },
  {
    id: 'onam',
    name: 'Onam',
    tagline: 'The Grand Cultural Carnival of Kerala',
    month: 'August / September',
    season: 'Monsoon Harvest',
    stateKeys: ['kerala'],
    locations: ['Kochi', 'Thrissur', 'Thiruvananthapuram'],
    description: 'Kerala’s biggest festival commemorating King Mahabali, featuring Pookkalam flower carpets, Kathakali performances, and Vallamkali snake boat races.',
    significance: 'Welcomes the legendary egalitarian King Mahabali back to Kerala.',
    howLocalsCelebrate: 'Families create elaborate floral designs on entryways and cook a 26-dish Sadya feast served on banana leaves.',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1000&auto=format&fit=crop',
    experienceIds: ['kerala-cooking-kochi']
  },
  {
    id: 'baisakhi',
    name: 'Baisakhi',
    tagline: 'Harvest Joy & Khalsa Foundation Day',
    month: 'April',
    season: 'Spring',
    stateKeys: ['punjab', 'delhi', 'haryana'],
    locations: ['Amritsar', 'Anandpur Sahib', 'Chandigarh'],
    description: 'The golden wheat fields of Punjab come alive with high-energy Bhangra drums and spiritual gratitude.',
    significance: 'Marks the Solar New Year and the historic creation of Khalsa Panth in 1699.',
    howLocalsCelebrate: 'Early morning prayers at Gurdwaras, vibrant street processions (Nagar Kirtan), and village harvesting songs.',
    image: 'https://images.unsplash.com/photo-1609946727702-86103328e188?q=80&w=1000&auto=format&fit=crop',
    experienceIds: ['baisakhi-punjab-village']
  },
  {
    id: 'navratri-garba',
    name: 'Navratri',
    tagline: 'Nine Nights of Goddess Devotion & Garba Dance',
    month: 'October',
    season: 'Autumn',
    stateKeys: ['gujarat', 'maharashtra', 'rajasthan'],
    locations: ['Ahmedabad', 'Vadodara', 'Mumbai'],
    description: 'The world’s longest dance festival where millions dance in rhythmic concentric circles under starry autumn skies.',
    significance: 'Honors Goddess Durga’s nine manifestations and the victory of light over darkness.',
    howLocalsCelebrate: 'Dressing in embroidered Chaniya Choli, playing Garba and Dandiya Raas with sticks until midnight.',
    image: 'https://images.unsplash.com/photo-1609946727702-86103328e188?q=80&w=1000&auto=format&fit=crop',
    experienceIds: []
  },
  {
    id: 'diwali',
    name: 'Diwali',
    tagline: 'The Festival of Lights & Inner Awakening',
    month: 'November',
    season: 'Autumn',
    stateKeys: ['uttar-pradesh', 'delhi', 'rajasthan', 'maharashtra', 'west-bengal'],
    locations: ['Varanasi', 'Ayodhya', 'Jaipur', 'Mumbai'],
    description: 'Millions of clay diya oil lamps illuminate homes, temples, and rivers, welcoming peace, wisdom, and prosperity.',
    significance: 'Commemorates Lord Rama’s return to Ayodhya after 14 years.',
    howLocalsCelebrate: 'Lighting terracotta diyas, making colorful Rangoli, exchanging mithai sweets, and Lakshmi Puja prayers.',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1000&auto=format&fit=crop',
    experienceIds: ['banaras-artisan-morning']
  }
];

export const ONLINE_CLASSES: OnlineClass[] = [
  {
    id: 'class-cooking-101',
    title: 'Traditional Indian Cooking: Master Spice Tempering',
    category: 'Food',
    hostName: 'Meera Patel',
    hostAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
    stateKey: 'rajasthan',
    liveDate: 'Live Saturday, 6:00 PM IST',
    duration: '90 mins',
    skillLevel: 'Beginner',
    capacity: 'Max 15 participants',
    priceINR: 950,
    image: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?q=80&w=800&auto=format&fit=crop',
    overview: 'Learn the foundational secret of Indian flavor: tempering spices in ghee (Tadka). Cook along live from your own home kitchen.'
  },
  {
    id: 'class-bharatanatyam-intro',
    title: 'Introduction to Bharatanatyam Mudras & Expressions',
    category: 'Dance',
    hostName: 'Kavita Sharma',
    hostAvatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=400&auto=format&fit=crop',
    stateKey: 'andhra-pradesh',
    liveDate: 'Live Sunday, 11:00 AM IST',
    duration: '75 mins',
    skillLevel: 'All Levels',
    capacity: 'Max 20 participants',
    priceINR: 800,
    image: 'https://images.unsplash.com/photo-1600100397608-f010e620a8ca?q=80&w=800&auto=format&fit=crop',
    overview: 'Explore the 28 single-hand gestures (Asamyutta Hastas) and eye expressions used in Indian classical dance.'
  },
  {
    id: 'class-diwali-culture',
    title: 'Understanding Indian Festivals: Rituals & Context',
    category: 'Traditions',
    hostName: 'Raghav Mishra',
    hostAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    stateKey: 'uttar-pradesh',
    liveDate: 'Live Wednesday, 7:30 PM IST',
    duration: '60 mins',
    skillLevel: 'All Levels',
    capacity: 'Max 30 participants',
    priceINR: 600,
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=800&auto=format&fit=crop',
    overview: 'Gain deep cultural context on Indian festival calendars, Vedic timing, and household spiritual customs before your trip.'
  }
];

export const CULTURAL_QUIZZES: CulturalQuiz[] = [
  {
    id: 'quiz-indian-dance-master',
    title: 'Classical Dances of India Knowledge Challenge',
    category: 'Dance & Art',
    difficulty: 'Medium',
    description: 'Test your understanding of India’s 8 Sangeet Natak Akademi classical dance traditions, mudras, and origins.',
    image: 'https://images.unsplash.com/photo-1600100397608-f010e620a8ca?q=80&w=800&auto=format&fit=crop',
    passingScorePercent: 70,
    badgeAwarded: 'Natyashastra Scholar',
    questions: [
      {
        id: 1,
        question: 'Which classical dance form originated in the village of Kuchipudi in Andhra Pradesh?',
        options: ['Bharatanatyam', 'Kuchipudi', 'Kathakali', 'Sattriya'],
        correctAnswerIndex: 1,
        explanation: 'Kuchipudi originated in the Krishna district of Andhra Pradesh as a dance-drama tradition.'
      },
      {
        id: 2,
        question: 'Kathakali dance-drama is famous for elaborate face makeup and originated in which state?',
        options: ['Kerala', 'Tamil Nadu', 'Karnataka', 'Odisha'],
        correctAnswerIndex: 0,
        explanation: 'Kathakali is Kerala’s iconic classical dance-drama featuring green face paint (Pacha) for noble heroes.'
      },
      {
        id: 3,
        question: 'Which hand gesture in classical dance is called "Pataka"?',
        options: ['Flag gesture with open palm and fingers joined', 'Deer head gesture', 'Triangular lotus gesture', 'Fist gesture'],
        correctAnswerIndex: 0,
        explanation: 'Pataka (Flag) is the first single-hand gesture in Abhinaya Darpana, with straight open palm and closed fingers.'
      },
      {
        id: 4,
        question: 'Sattriya classical dance was introduced by the 15th-century saint Srimanta Sankardev in which state?',
        options: ['West Bengal', 'Assam', 'Manipur', 'Odisha'],
        correctAnswerIndex: 1,
        explanation: 'Sattriya was created by Mahapurush Srimanta Sankardev in Assam’s Vaishnavite monasteries (Sattras).'
      },
      {
        id: 5,
        question: 'Which dance form features dancers balancing on the rim of a brass plate while holding oil lamps?',
        options: ['Ghoomar', 'Tarangam in Kuchipudi', 'Garba', 'Chhau'],
        correctAnswerIndex: 1,
        explanation: 'Tarangam is a thrilling climax in Kuchipudi where the dancer executes rhythmic patterns while standing on brass plate edges.'
      }
    ]
  },
  {
    id: 'quiz-festivals-traditions',
    title: 'Festivals & Living Heritage of India',
    category: 'Festivals',
    difficulty: 'Easy',
    description: 'Explore your awareness of regional festivals, seasonal harvests, and cultural traditions across Indian states.',
    image: 'https://images.unsplash.com/photo-1576487248805-acf45f51623a?q=80&w=800&auto=format&fit=crop',
    passingScorePercent: 60,
    badgeAwarded: 'Festival Explorer',
    questions: [
      {
        id: 1,
        question: 'Onam is the major harvest festival celebrated in which South Indian state?',
        options: ['Tamil Nadu', 'Kerala', 'Telangana', 'Karnataka'],
        correctAnswerIndex: 1,
        explanation: 'Onam is Kerala’s state harvest festival featuring Pookkalam floral carpets and Vallamkali boat races.'
      },
      {
        id: 2,
        question: 'Which festival is known as the "Festival of Colors" celebrated across India in spring?',
        options: ['Diwali', 'Holi', 'Dussehra', 'Baisakhi'],
        correctAnswerIndex: 1,
        explanation: 'Holi welcomes spring with herbal colored powders (gulal) and community joy.'
      },
      {
        id: 3,
        question: 'Hornbill Festival, celebrating 16 indigenous tribal cultures, takes place in which state?',
        options: ['Nagaland', 'Mizoram', 'Assam', 'Meghalaya'],
        correctAnswerIndex: 0,
        explanation: 'Hornbill Festival is held every December at Kisama Heritage Village in Nagaland.'
      },
      {
        id: 4,
        question: 'Durga Puja in Kolkata was inscribed on UNESCO’s Intangible Cultural Heritage list in which year?',
        options: ['2015', '2021', '2018', '2023'],
        correctAnswerIndex: 1,
        explanation: 'UNESCO inscribed Kolkata Durga Puja as Intangible Cultural Heritage of Humanity in December 2021.'
      }
    ]
  },
  {
    id: 'quiz-states-heritages',
    title: 'Indian States & Architectural Treasures',
    category: 'Heritage',
    difficulty: 'Medium',
    description: 'Test your geographic and historical knowledge of India’s 28 states and unique regional artisan crafts.',
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=800&auto=format&fit=crop',
    passingScorePercent: 70,
    badgeAwarded: 'Heritage Architect',
    questions: [
      {
        id: 1,
        question: 'Which state is famous for Channapatna wooden lacquerware toys?',
        options: ['Karnataka', 'Gujarat', 'Odisha', 'Bihar'],
        correctAnswerIndex: 0,
        explanation: 'Channapatna in Karnataka’s Ramanagara district is known as Gombegala Ooru (Toy Town).'
      },
      {
        id: 2,
        question: 'Madhubani / Mithila painting originated in which Indian state?',
        options: ['West Bengal', 'Bihar', 'Madhya Pradesh', 'Rajasthan'],
        correctAnswerIndex: 1,
        explanation: 'Madhubani painting is a folk art tradition practiced by women in the Mithila region of Bihar.'
      },
      {
        id: 3,
        question: 'Konark Sun Temple, designed as a colossal stone chariot with 24 carved wheels, is in which state?',
        options: ['Odisha', 'Tamil Nadu', 'Andhra Pradesh', 'Maharashtra'],
        correctAnswerIndex: 0,
        explanation: 'Konark Sun Temple was constructed in the 13th century by King Narasimhadeva I in Odisha.'
      }
    ]
  }
];

export const STORY_ARTICLES: StoryArticle[] = [
  {
    id: 'story-first-holi',
    title: 'My First Holi Inside a Jaipur Courtyard',
    subtitle: 'Moving beyond commercial color crowds into organic family warmth and marigold petals',
    author: 'Sarah Jenkins',
    authorRole: 'Cultural Traveler & Journalist',
    authorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
    date: 'February 28, 2026',
    readTime: '6 min read',
    category: 'Traveler Experience',
    image: 'https://images.unsplash.com/photo-1576487248805-acf45f51623a?q=80&w=1000&auto=format&fit=crop',
    excerpt: 'Before visiting India, I feared Holi would feel overwhelming. Meeting Meera Patel changed everything I thought I knew about cultural celebration.',
    content: [
      'Standing inside the centuries-old stone courtyard of Meera Patel’s home in Jaipur, the noise of traffic dissolved into the gentle laughter of three generations preparing for spring.',
      'We didn’t buy plastic bottles or artificial dye. Instead, Meera handed me dried marigold flower petals collected over two weeks from neighborhood shrines. We ground them with sandalwood paste until our palms smelled of warm earth.',
      'What touched me most was not the vibrant color, but the deliberate sweetness of every interaction. Elders blessed younger family members by applying a tiny tilak of red gulal to the forehead before any playful color was tossed.',
      'By early afternoon, we sat around a low wooden table eating freshly fried Gujiya sweets. I realized that culture is not something you passively watch like a movie; it is a living human embrace.'
    ],
    featured: true
  },
  {
    id: 'story-weaving-banaras',
    title: 'The Silent Looms of Varanasi: Preserving 500 Years of Zari Art',
    subtitle: 'Inside the quarter where silver, gold, and silk intertwine into sacred heirlooms',
    author: 'Raghav Mishra',
    authorRole: 'Master Cultural Ambassador',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    date: 'January 14, 2026',
    readTime: '8 min read',
    category: 'Artisan Heritage',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1000&auto=format&fit=crop',
    excerpt: 'In an era of high-speed digital printing, the handloom weavers of Kashi continue moving wooden shuttles one thread at a time.',
    content: [
      'Every Banarasi saree holds 300,000 movements of human hands. When a shuttle passes through warp threads, it makes a soft rhythmic click that has echoed through Banaras lanes since the Mughal era.',
      'Travelers who visit our workshop often ask why a single saree can take two months to weave. When I show them how we manually pick out every floral motif using wooden needles, their eyes change.',
      'This art is not merely commercial. It is a family record passed down from fathers to sons and mothers to daughters.'
    ],
    featured: false
  }
];

// Helper search function
export function searchSanskriti(query: string) {
  const q = query.toLowerCase().trim();
  if (!q) return { states: [], experiences: [], festivals: [], onlineClasses: [] };

  const states = INDIAN_STATES.filter(s =>
    s.name.toLowerCase().includes(q) ||
    s.capital.toLowerCase().includes(q) ||
    s.region.toLowerCase().includes(q) ||
    s.danceForms.some(d => d.toLowerCase().includes(q))
  );

  const experiences = CULTURAL_EXPERIENCES.filter(e =>
    e.title.toLowerCase().includes(q) ||
    e.location.toLowerCase().includes(q) ||
    e.category.toLowerCase().includes(q)
  );

  const festivals = FESTIVALS_LIST.filter(f =>
    f.name.toLowerCase().includes(q) ||
    f.locations.some(l => l.toLowerCase().includes(q))
  );

  const onlineClasses = ONLINE_CLASSES.filter(c =>
    c.title.toLowerCase().includes(q) ||
    c.category.toLowerCase().includes(q)
  );

  return { states, experiences, festivals, onlineClasses };
}

export const DESTINATIONS: Destination[] = [
  {
    slug: 'dest-1',
    stateKey: 'rajasthan',
    name: 'Jaipur Old City',
    type: 'Iconic',
    location: 'Jaipur, Rajasthan',
    illustration: 'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?q=80&w=800&auto=format&fit=crop',
    culturalSummary: 'The Pink City known for its royal palaces and bustling bazaars.',
    category: 'Heritage',
    bestSeason: 'Oct - March',
    whyItMatters: 'Jaipur represents the pinnacle of Rajput architecture and city planning in the 18th century.',
    whatToSee: ['Hawa Mahal', 'City Palace', 'Jantar Mantar'],
    nearbyExperiences: ['holi-jaipur-family'],
    guideAvailability: true
  },
  {
    slug: 'dest-2',
    stateKey: 'kerala',
    name: 'Fort Kochi',
    type: 'Iconic',
    location: 'Kochi, Kerala',
    illustration: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop',
    culturalSummary: 'A historic port town blending Portuguese, Dutch, and British influences.',
    category: 'History',
    bestSeason: 'Sept - Feb',
    whyItMatters: 'It was the center of the global spice trade for centuries, creating a unique melting pot of cultures.',
    whatToSee: ['Chinese Fishing Nets', 'Mattancherry Palace', 'Jewish Synagogue'],
    nearbyExperiences: [],
    guideAvailability: true
  },
  {
    slug: 'hidden-1',
    stateKey: 'rajasthan',
    name: 'Bundi',
    type: 'Hidden',
    location: 'Bundi, Rajasthan',
    illustration: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800&auto=format&fit=crop',
    culturalSummary: 'A quiet town known for its ornate stepwells and miniature paintings.',
    category: 'Heritage',
    bestSeason: 'Oct - March',
    whyItMatters: 'Bundi offers a tranquil alternative to major cities, preserving stunning examples of Baoris (stepwells).',
    whatToSee: ['Taragarh Fort', 'Raniji Ki Baori', 'Garh Palace'],
    nearbyExperiences: [],
    guideAvailability: true
  }
];

export const GUIDE_PROFILES: GuideProfile[] = [
  {
    slug: 'guide-1',
    name: 'Rajendra Singh',
    type: 'Tourist Guide',
    city: 'Jaipur',
    stateKey: 'rajasthan',
    languages: ['English', 'Hindi', 'French'],
    specialties: ['History', 'Architecture'],
    verified: true,
    experienceCount: 500,
    rating: 4.9,
    reviewsCount: 120,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
    about: 'A passionate historian bringing the forts and palaces of Rajasthan to life.',
    experiencesOffered: []
  },
  {
    slug: 'guide-2',
    name: 'Priya Nambiar',
    type: 'Cultural Ambassador',
    city: 'Kochi',
    stateKey: 'kerala',
    languages: ['English', 'Malayalam'],
    specialties: ['Spice Trade History', 'Cuisine'],
    verified: true,
    experienceCount: 300,
    rating: 4.95,
    reviewsCount: 85,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop',
    about: 'Growing up in Fort Kochi, Priya shares the culinary secrets and stories of her ancestors.',
    experiencesOffered: []
  }
];

export function getQuizForState(stateKey: string): CulturalQuiz {
  const state = INDIAN_STATES.find(s => s.key === stateKey) || INDIAN_STATES[0];
  const existing = CULTURAL_QUIZZES.find(q => q.stateKey === stateKey);
  if (existing) return existing;

  return {
    id: `quiz-${state.key}`,
    title: `${state.name} Cultural Heritage Quiz`,
    category: 'Regional Culture',
    stateKey: state.key,
    difficulty: 'Medium',
    description: `Test your knowledge about the rich traditions, crafts, and history of ${state.name}.`,
    image: state.image,
    passingScorePercent: 70,
    badgeAwarded: `${state.name} Cultural Scholar`,
    questions: [
      {
        id: 1,
        question: `Which classical or regional dance form originated in or is celebrated in ${state.name}?`,
        options: [state.danceForms[0] || 'Kathak', 'Bharatanatyam', 'Bhangra', 'Garba'],
        correctAnswerIndex: 0,
        explanation: `${state.danceForms[0] || 'This dance'} is deeply intertwined with the cultural expressions of ${state.name}.`
      },
      {
        id: 2,
        question: `What is the capital of ${state.name}?`,
        options: [state.capital, 'New Delhi', 'Mumbai', 'Kolkata'],
        correctAnswerIndex: 0,
        explanation: `${state.capital} serves as the administrative and cultural hub of ${state.name}.`
      },
      {
        id: 3,
        question: `Which of the following traditional crafts or textiles is renowned from ${state.name}?`,
        options: [state.crafts[0] || 'Pashmina', 'Kanchipuram Silk', 'Chanderi', 'Bandhani'],
        correctAnswerIndex: 0,
        explanation: `${state.crafts[0] || 'Handicrafts'} are a hallmark of artisanal mastery in ${state.name}.`
      }
    ]
  };
}

