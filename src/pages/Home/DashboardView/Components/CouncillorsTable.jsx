import styles from "../styles/CouncillorsTable.module.css";

const councillorsData = [
  {
    date: "23/09/2022",
    customer: "Tadeusz Białous",
    email: "tadeusz.bialous@example.com",
    phone: "123-456-789",
    role: "radny",
    affiliation: "komisja rady miasta"
  },
  {
    date: "23/09/2022",
    customer: "Joanna Brzózka",
    email: "joanna.brzozka@example.com",
    phone: "123-456-780",
    role: "radny",
    affiliation: "komisja rady miasta"
  },
  {
    date: "23/09/2022",
    customer: "Marek Florczyk",
    email: "marek.florczyk@example.com",
    phone: "123-456-781",
    role: "radny",
    affiliation: "komisja rady miasta"
  },
  {
    date: "23/09/2022",
    customer: "Grzegorz Głupczyk",
    email: "grzegorz.glupczyk@example.com",
    phone: "123-456-782",
    role: "radny",
    affiliation: "komisja rady miasta"
  },
  {
    date: "23/09/2022",
    customer: "Marian Kaim",
    email: "marian.kaim@example.com",
    phone: "123-456-783",
    role: "radny",
    affiliation: "komisja rady miasta"
  },
  {
    date: "23/09/2022",
    customer: "Krzysztof Kazek",
    email: "krzysztof.kazek@example.com",
    phone: "123-456-784",
    role: "radny",
    affiliation: "komisja rady miasta"
  },
  {
    date: "23/09/2022",
    customer: "Łukasz Kłosek",
    email: "lukasz.klosek@example.com",
    phone: "123-456-785",
    role: "radny",
    affiliation: "komisja rady miasta"
  },
  {
    date: "23/09/2022",
    customer: "Radosław Knesz",
    email: "radoslaw.knesz@example.com",
    phone: "123-456-786",
    role: "radny",
    affiliation: "komisja rady miasta"
  },
  {
    date: "23/09/2022",
    customer: "Franciszek Kurpanik",
    email: "franciszek.kurpanik@example.com",
    phone: "123-456-787",
    role: "radny",
    affiliation: "komisja rady miasta"
  },
  {
    date: "23/09/2022",
    customer: "Franciszek Kurpanik",
    email: "franciszek.kurpanik@example.com",
    phone: "123-456-787",
    role: "radny",
    affiliation: "komisja rady miasta"
  },
  {
    date: "23/09/2022",
    customer: "Franciszek Kurpanik",
    email: "franciszek.kurpanik@example.com",
    phone: "123-456-787",
    role: "radny",
    affiliation: "komisja rady miasta"
  },
  {
    date: "23/09/2022",
    customer: "Franciszek Kurpanik",
    email: "franciszek.kurpanik@example.com",
    phone: "123-456-787",
    role: "radny",
    affiliation: "komisja rady miasta"
  },
  {
    date: "23/09/2022",
    customer: "Franciszek Kurpanik",
    email: "franciszek.kurpanik@example.com",
    phone: "123-456-787",
    role: "radny",
    affiliation: "komisja rady miasta"
  },
  {
    date: "23/09/2022",
    customer: "Franciszek Kurpanik",
    email: "franciszek.kurpanik@example.com",
    phone: "123-456-787",
    role: "radny",
    affiliation: "komisja rady miasta"
  },
  {
    date: "23/09/2022",
    customer: "Franciszek Kurpanik",
    email: "franciszek.kurpanik@example.com",
    phone: "123-456-787",
    role: "radny",
    affiliation: "komisja rady miasta"
  },
  {
    date: "23/09/2022",
    customer: "Franciszek Kurpanik",
    email: "franciszek.kurpanik@example.com",
    phone: "123-456-787",
    role: "radny",
    affiliation: "komisja rady miasta"
  },
  {
    date: "23/09/2022",
    customer: "Franciszek Kurpanik",
    email: "franciszek.kurpanik@example.com",
    phone: "123-456-787",
    role: "radny",
    affiliation: "komisja rady miasta"
  },
  {
    date: "23/09/2022",
    customer: "Franciszek Kurpanik",
    email: "franciszek.kurpanik@example.com",
    phone: "123-456-787",
    role: "radny",
    affiliation: "komisja rady miasta"
  },
  {
    date: "23/09/2022",
    customer: "Franciszek Kurpanik",
    email: "franciszek.kurpanik@example.com",
    phone: "123-456-787",
    role: "radny",
    affiliation: "komisja rady miasta"
  },
];



function CoucillorsTable() {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.invoiceTable}>
        <thead>
          <tr>
            {/* <th>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c7a45db1f7fd5cd04aa41c67dd6f02028c4026d3c78b25d99be62c9544e8c5d?placeholderIfAbsent=true&apiKey=cabd41898d2b4f96868f37ab96d7062c"
                alt=""
                className={styles.tableIcon}
              />
              Invoice ID
            </th> */}
            <th>Lp.</th>
            <th>Imie i nazwisko</th>
            <th>Email</th>
            <th>Telefon </th>
            <th>Funkcja</th>
            <th>Przynależność</th>
          </tr>
        </thead>
        <tbody>
          {councillorsData.map((councillor, index) => (
            <tr key={index}>
              <td>{index + 1}.</td>
              <td>{councillor.customer}</td>
              <td>{councillor.email}</td>
              <td>{councillor.phone}</td>
              <td>{councillor.role}</td>
              <td>{councillor.affiliation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CoucillorsTable;
