import React from "react";
import Filter from "../Filter/Filter";
import Banner from "../Banner/Banner";

const MainPage = () => {
    return (
        <div className="page">
            <h1 className="page__title">НАЙДЕНО 12 ПРОЕКТОВ</h1>
            <div className="page__wrapper">
                <div className="page__content">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque delectus laudantium temporibus vitae minima, aperiam laborum numquam dolore, amet est, voluptas repellat odit atque unde repudiandae nostrum totam eius incidunt.
                        Laborum rerum consequatur tempore optio temporibus laboriosam ex, repellat magnam, debitis voluptates praesentium animi odit deserunt amet dolores iste commodi deleniti eius in magni provident, voluptatibus delectus. Eum, quasi exercitationem.
                        Debitis pariatur reprehenderit non doloribus ipsum maxime eligendi. Tempora, quibusdam, non veniam temporibus reiciendis dolores laboriosam dolorem sapiente sunt aut, rem excepturi esse? Facere eos doloribus nam officiis blanditiis quas.
                        Totam itaque, qui harum dolore ipsam libero assumenda cupiditate. Excepturi veniam quisquam distinctio repellat eaque obcaecati voluptatum praesentium. Ipsa, quibusdam dolores. Saepe dolores minima officiis, dignissimos at consequuntur blanditiis expedita!
                        Similique eius provident aspernatur iste assumenda excepturi repellat nulla quisquam tempora illo placeat, autem saepe, necessitatibus architecto fugit voluptates reiciendis dolor. Exercitationem voluptates recusandae porro, animi voluptatem facere voluptas velit.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque delectus laudantium temporibus vitae minima, aperiam laborum numquam dolore, amet est, voluptas repellat odit atque unde repudiandae nostrum totam eius incidunt.
                        Laborum rerum consequatur tempore optio temporibus laboriosam ex, repellat magnam, debitis voluptates praesentium animi odit deserunt amet dolores iste commodi deleniti eius in magni provident, voluptatibus delectus. Eum, quasi exercitationem.
                        Debitis pariatur reprehenderit non doloribus ipsum maxime eligendi. Tempora, quibusdam, non veniam temporibus reiciendis dolores laboriosam dolorem sapiente sunt aut, rem excepturi esse? Facere eos doloribus nam officiis blanditiis quas.
                        Totam itaque, qui harum dolore ipsam libero assumenda cupiditate. Excepturi veniam quisquam distinctio repellat eaque obcaecati voluptatum praesentium. Ipsa, quibusdam dolores. Saepe dolores minima officiis, dignissimos at consequuntur blanditiis expedita!
                        Similique eius provident aspernatur iste assumenda excepturi repellat nulla quisquam tempora illo placeat, autem saepe, necessitatibus architecto fugit voluptates reiciendis dolor. Exercitationem voluptates recusandae porro, animi voluptatem facere voluptas velit.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque delectus laudantium temporibus vitae minima, aperiam laborum numquam dolore, amet est, voluptas repellat odit atque unde repudiandae nostrum totam eius incidunt.
                        Laborum rerum consequatur tempore optio temporibus laboriosam ex, repellat magnam, debitis voluptates praesentium animi odit deserunt amet dolores iste commodi deleniti eius in magni provident, voluptatibus delectus. Eum, quasi exercitationem.
                        Debitis pariatur reprehenderit non doloribus ipsum maxime eligendi. Tempora, quibusdam, non veniam temporibus reiciendis dolores laboriosam dolorem sapiente sunt aut, rem excepturi esse? Facere eos doloribus nam officiis blanditiis quas.
                        Totam itaque, qui harum dolore ipsam libero assumenda cupiditate. Excepturi veniam quisquam distinctio repellat eaque obcaecati voluptatum praesentium. Ipsa, quibusdam dolores. Saepe dolores minima officiis, dignissimos at consequuntur blanditiis expedita!
                        Similique eius provident aspernatur iste assumenda excepturi repellat nulla quisquam tempora illo placeat, autem saepe, necessitatibus architecto fugit voluptates reiciendis dolor. Exercitationem voluptates recusandae porro, animi voluptatem facere voluptas velit.
                    </p>
                    <Banner />
                </div>
                <div className="page__aside">
                    <Filter />
                    <div className="page__group">
                        <span className="page__count">20 проектов</span>
                        <button className="page__button">Показать</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage;