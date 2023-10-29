<?php

$movie_details = get_field('movie_details');
$movie_year = $movie_details['movie_year'];
$movie_genre = $movie_details['movie_genre'];
$movie_duration = $movie_details['movie_duration'];

?>


<div class="movie-details">
    <div class="movie-details__year">
        <span class="movie-details__year-label">Año:</span>
        <?php echo $movie_year ? esc_html( $movie_year ) : 'Desconocido'; ?>
    </div>
    <div class="movie-details__genre">
        <span class="movie-details__genre-label">Género:</span>
        <?php echo $movie_genre ? esc_html( $movie_genre ) : 'Desconocido' ?>
    </div>
    <div class="movie-details__duration">
        <span class="movie-details__duration-label">Duración:</span>
        <?php echo $movie_duration ? esc_html( $movie_duration ) : 'Desconocido' ?> minutos
    </div>
</div>