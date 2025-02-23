function tagsRow() {
	const $tags = document.querySelectorAll('[data-tags]');
	if($tags) {
		$tags.forEach(tags => {
			const tag = tags.querySelectorAll('[data-tag]');

			tags.addEventListener('click', (event)=> {
				const target = event.target;
				event.preventDefault();
				if(target && target.parentElement.hasAttribute('data-tag')) {
					tag.forEach(item => {
						item.classList.remove('active');
					});
					target.parentElement.classList.add('active');
				}
			});
		});
	}
}
document.addEventListener('DOMContentLoaded', tagsRow);