import { DataType, UserType, ExperienceType } from "../types/DataTypes";

const data: DataType[] = [
  {
    id: 1,
    title: "Title 1",
    content: "Body 1",
    status: true,
  },
  {
    id: 2,
    title: "Title 1",
    content: "Body 1",
    status: true,
  },
  {
    id: 3,
    title: "Title 1",
    content: "Body 1",
    status: false,
  },
  {
    id: 4,
    title: "Title 1",
    content: "Body 1",
    status: false,
  },
];

const dataUser: UserType[] = [
  {
    id: 1,
    name: "john",
    email: "john@gmail.com",
    password: "password",
  },
];

const AboutMe: ExperienceType[] = [
  {
    nama: "Muhamad Fauzan Ibnu Syahlan",
    alamat: "Jl Assofa 2 No 16b",
    sd: "SDN 03 Sukabumi Utara",
    smp: "SMPN 127 Jakarta Barat",
    sma: "SMAN 16 Jakarta Barat",
    sarjana: "Universitas Mercu Buana",
    organizations: [
      {
        id_organization: 1,
        organization_name:
          "Google Developer Students Club of Mercu Buana University",
        role: "Co Lead",
        description: "GDSC",
      },
      {
        id_organization: 2,
        organization_name:
          "Google Developer Students Club of Mercu Buana University",
        role: "Relation Team",
        description: "Organisasi mahasiswa",
      },
      {
        id_organization: 3,
        organization_name: "Himpunan Mahasiswa Teknik Informatika",
        role: "Ketua Divisi Riset dan Teknologi",
        description: "Organisasi mahasiswa",
      },
      {
        id_organization: 4,
        organization_name: "Himpunan Mahasiswa Teknik Informatika",
        role: "Anggota Divisi Riset dan Teknologi",
        description: "Organisasi mahasiswa",
      },
    ],
    experiences: [
      {
        id_experience: 1,
        company: "Bakrie Center Foundation",
        role: "Software Engineer Intern (Front-end)",
        experience_year: "5 Months",
        description: "Membuat aplikasi berbasis web",
        type: "Internship",
      },
      {
        id_experience: 2,
        company: "WIR Asia Global",
        role: "Frontend Developer Intern",
        experience_year: "5 Months",
        description: "Membuat aplikasi berbasis web",
        type: "Internship",
      },
      {
        id_experience: 3,
        company: "Eastlah Space",
        role: "Frontend Engineer",
        experience_year: "5 Months",
        description: "Membuat aplikasi berbasis web",
        type: "Part-Time",
      },
    ],
  },
];

export { data, dataUser, AboutMe };
