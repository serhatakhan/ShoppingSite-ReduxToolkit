const Sorting = ({ setSort }) => {
  return (
    <div className="bg-gray-100 my-5 p-5 flex items-center justify-between">
      <div>Ana Sayfa {">"} Tüm Ürünler </div>
      <select
        onChange={(e) => setSort(e.target.value)}
        className="bg-gray-200 py-3 px-5"
        name=""
        id=""
      >
        <option disabled value="">
          Sıralama
        </option>
        <option value="dec">En düşük fiyat</option>
        <option value="inc">En yüksek fiyat</option>
      </select>
    </div>
  );
};

export default Sorting;
