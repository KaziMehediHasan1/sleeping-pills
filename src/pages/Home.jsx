import CommonWrapper from "../components/CommonWrapper";
import { useState } from "react";
import useFetchQuery from "../hooks/shared/useFetch";
import Banner from "../components/Home/Banner";
import Facilities from "../components/Home/Facilities";
import Welcome from "../components/Home/Welcome";
import Card from "../components/Home/Card";
import Articles from "../components/Home/Articles";
import SeePills from "../components/Home/SeePills";
import LatestBlog from "../components/Home/LatestBlog";

const Home = () => {
  const [seeMore, setSeeMore] = useState(true);

  const [page, setPage] = useState(1);
  const { data, isSuccess } = useFetchQuery("/products", {
    limit: 10,
    skip: (page - 1) * 10,
  });

  if (isSuccess) {
    console.log(data);
  }

  return (
    <>
      <CommonWrapper>
        {/* <Button onClick={() => setPage(page + 1)}>Page {page}</Button>
        <Button onClick={() => setSeeMore(true)}>See More</Button> */}
        <Banner />
        <Facilities />
        <Welcome />
        <Card />
        <SeePills />
        <Articles />
        <LatestBlog />
        
        {/* <Pagination
          radius="none"
          initialPage={1}
          onChange={setPage}
          page={page}
          size="lg"
          total={10}
        /> */}
      </CommonWrapper>
    </>
  );
};

export default Home;
