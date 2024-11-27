var main_container = document.getElementById('main')

function jumpTo(_tag)
{
    const tag_y_position = document.getElementById(_tag).offsetTop
    main_container.scrollTo(tag_y_position, top)
}