 <main>
        <div class="container">
            <form class="form">
                <div class="form__content">
                    <label class="form__label" for="event-name">Nome do evento: </label>
                    <input class="form__control" type="text" id="event-name">
                    <label class="form__label" for="event-chance">Chance dele acontecer: </label>
                    <input class="form__control" type="number" id="event-chance" min="1" step="10" max="100" value="1">
                </div>
                <button class="form__submit" type="submit">Rodar</button>
            </form>
        </div>
    </main>

    <script src="/src/scripts/main.js"></script>