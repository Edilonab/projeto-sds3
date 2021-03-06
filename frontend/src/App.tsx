import Barchart from "components/Barchart";
import DataTable from "components/DataTable";
import Donutchart from "components/DonutChart";
import Footer from "components/Footer";
import NavBar from "components/NaveBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3" >Dashboard de Vendas</h1>

        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="test-center text-secondary">Taxa de sucesso vendas (%)</h5>
            <Barchart />
          </div>
          <div className="col-sm-6">
            <h5 className="test-center text-secondary">Todas vendas </h5>
            <Donutchart />
          </div>
        </div>

        <div className="py-3">
          <h2 className="text-primary"> Todas vendas</h2>
        </div>

        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
