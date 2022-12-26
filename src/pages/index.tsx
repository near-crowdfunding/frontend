import {
  Image,
  Button,
  Col,
  Row,
  Text,
  Spacer,
  Container,
} from "@nextui-org/react";
import type { NextPage } from "next";
// Import Swiper React components
import { Navigation, Scrollbar, A11y, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Home: NextPage = () => {
  return (
    <>
      <Container>
        <Text size="$3xl" css={{ fontWeight: "$semibold" }}>
          Projects
        </Text>

        <AppSwiper />
        <Text size="$3xl" css={{ fontWeight: "$semibold" }}>
          Coming soon
        </Text>
        <Text size="$3xl" css={{ fontWeight: "$semibold" }}>
          Finished
        </Text>
      </Container>
    </>
  );
};

const AppSwiper = () => {
  const images = [
    "/assets/pexels-belle-co-783682.jpg",
    "/assets/pexels-hoàng-chương-2331030.jpg",
    "/assets/pexels-sia-panayidou-9480432.jpg",
  ];

  return (
    <>
      <Swiper
        modules={[Navigation, Scrollbar, A11y, Scrollbar, EffectFade]}
        effect="fade"
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <Row align="center" gap={2} css={{ backgroundColor: "White" }}>
              <Image src={image} alt="image" width={500} height={300} />

              <Col
                css={{
                  justifyContent: "center",
                }}
              >
                <Text size="$2xl"> {image}</Text>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
                <Spacer />
                <Button>Read more</Button>
              </Col>
            </Row>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Home;
