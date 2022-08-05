/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("profiles").del();

  await knex.raw("ALTER SEQUENCE profiles_profile_id_seq RESTART WITH 1");

  await knex("profiles").insert([
    {
      user_id: 2,
      email: "aki@yahoo.co.jp",
      full_name: "Aki Habara",
      about:
        "I've been a teacher at CC for 2 years and absolutely love it. I love helping students further their knowledge and career. Feel free to connect with me!",
      cc_cohort: null,
      linkedin_profile: "https://www.linkedin.com/feed/",
      twitter_handle: "aki2022",
      profile_photo: "images/blank.jpeg",
    },
    {
      user_id: 3,
      email: "booyah@aol.com",
      full_name: "C. Buya",
      about: "Hello everyone 🤩 nice to meet you",
      cc_cohort: 22,
      linkedin_profile: "https://www.linkedin.com/feed/",
      twitter_handle: "@shibuya109",
      profile_photo: "images/blank.jpeg",
    },
    {
      user_id: 4,
      email: "shin1997@hotmail.com",
      full_name: "Shin Juku",
      about: "Love databases. Looking for a role in database and back-end. 🧑🏻‍💻",
      cc_cohort: 26,
      linkedin_profile: null,
      twitter_handle: "@shiba_inu_lover",
      profile_photo: "images/blank.jpeg",
    },
    {
      user_id: 5,
      email: "oliver_daiba@gmail.com",
      full_name: "O. Daiba",
      about: "Hi I'm Olly! please give me a job 😂",
      cc_cohort: 27,
      linkedin_profile: "https://www.linkedin.com/feed/",
      twitter_handle: null,
      profile_photo: "images/blank.jpeg",
    },
    {
      user_id: 6,
      email: "mickey@disney.com",
      full_name: "D. Zunirando",
      about:
        "Experienced front end developer looking to get more into back-end",
      cc_cohort: 27,
      linkedin_profile: "https://www.linkedin.com/feed/",
      twitter_handle: null,
      profile_photo: "images/blank.jpeg",
    },
    {
      user_id: 7,
      email: "hara_juku@gmail.com",
      full_name: "Hara Juku",
      about: "❤️ startup life",
      cc_cohort: 25,
      linkedin_profile: null,
      twitter_handle: "@knex_baby",
      profile_photo: "images/blank.jpeg",
    },
    {
      user_id: 8,
      email: "skytree@yahoo.co.jp",
      full_name: "Skye Tsurii",
      about: "customer engineer at google cloud",
      cc_cohort: 12,
      linkedin_profile: "https://www.linkedin.com/feed/",
      twitter_handle: "@eggsnbacon",
      profile_photo: "images/blank.jpeg",
    },
    {
      user_id: 9,
      email: "ekb48@freemail.jp",
      full_name: "E. K. Bukuro",
      about: 'git commit -m "hope this works!"',
      cc_cohort: 11,
      linkedin_profile: null,
      twitter_handle: "@ekb48",
      profile_photo: "images/blank.jpeg",
    },
    {
      user_id: 10,
      email: "mumu@yahoo.com",
      full_name: "Musashi Murayama",
      about: "Shopify senior Ruby/Rails dev.",
      cc_cohort: 15,
      linkedin_profile: "https://www.linkedin.com/feed/",
      twitter_handle: "@nokogiri92",
      profile_photo: "images/blank.jpeg",
    },
    {
      user_id: 11,
      email: "yoko.hama@codechrysalis.io",
      full_name: "Yoko Hama",
      about: "Developer at Mercari. Open to connecting.",
      cc_cohort: 8,
      linkedin_profile: "https://www.linkedin.com/feed/",
      twitter_handle: "@yokohama",
      profile_photo: "images/blank.jpeg",
    },
  ]);
};
