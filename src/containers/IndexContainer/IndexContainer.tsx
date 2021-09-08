import React, { useEffect } from 'react';

//styles
import styles from './IndexContainer.module.css';
//HOCs
import { headerWithLogo } from '../../hocs/uiView/Header/headerWithLogo';

//components
import Header from '../../components/Header/Header';
import Container from '../../components/Container/Container';
import MovieCard from '../../components/MovieCard/MovieCard';
import { Pagination } from '../../components/Pagination/Pagination';

//action

function IndexContainer(props: any) {
    const { movieList, history } = props;
    useEffect(() => {
        console.log('props', props);
    }, []);

    const toMovieDetailPage = (movieID: string) => {
        history.push(`/movie-detail/${movieID}`);
    };

    return (
        <>
            <HeaderWithLogo />
            <Container column>
                <div className={styles.movieListContainer}>
                    <div className={styles.cardBox}>
                        {movieList.map((movieItem: any, index: number) => {
                            return (
                                <MovieCard
                                    title={movieItem.title}
                                    imdb_id={movieItem.imdb_id}
                                    key={index}
                                    toMovieDetailPage={toMovieDetailPage}
                                />
                            );
                        })}
                    </div>
                </div>
                <Pagination />
            </Container>
        </>
    );
}

export default IndexContainer;

const HeaderWithLogo = headerWithLogo(Header);
