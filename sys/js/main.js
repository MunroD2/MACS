angular.module('Mental Activity Cards', [])

	/*The master controller*/
	.controller('master', ($scope, $sce) => {
		m = $scope

		//Trust a string as renderable HTML
		m.trustAsHTML = $sce.trustAsHtml

		m.print = () => {
			print()
		}

		m.cards = [
			{
				title: `Deciding`,
				description: `Debating what to do, what is for the best`,
				image: `deciding.png`,
				colour: `#eb7c31`,
				authorToReference: "(Munro, 2024)",
				references: "Archer, M.S. (2003). <i>Structure, agency, and the internal conversation.</i> Cambridge University Press."
			},
			{
				title: `Re-living`,
				description: `Some event, period or relationship`,
				image: `re-living.png`,
				colour: `#a5a5a5`,
				authorToReference: "(Munro, 2024)",
				references: "Archer, M.S. (2003). <i>Structure, agency, and the internal conversation.</i> Cambridge University Press."
			},
			{
				title: `Prioritising`,
				description: `Working out what matter most, next, or at all to you`,
				image: `prioritising.png`,
				colour: `#fd0000`,
				authorToReference: "(Munro, 2024)",
				references: "Archer, M.S. (2003). <i>Structure, agency, and the internal conversation.</i> Cambridge University Press."
			},
			{
				title: `Clarifying`,
				description: `Sorting out what you think about some issue, person or problem`,
				image: `clarifying.png`,
				colour: `#a8cf8d`,
				authorToReference: "(Munro, 2024)",
				references: "Archer, M.S. (2003). <i>Structure, agency, and the internal conversation.</i> Cambridge University Press."
			},
			{
				title: `Imagining`,
				description: `The future, including ‘what would happen if…”`,
				image: `imagining.png`,
				colour: `#6f309f`,
				authorToReference: "(Munro, 2024)",
				references: "Archer, M.S. (2003). <i>Structure, agency, and the internal conversation.</i> Cambridge University Press."
			},
			{
				title: `Imaginary Conversations`,
				description: `Held with people known to you or whom you know of`,
				image: `imaginary-conversations.png`,
				colour: `#00afee`,
				authorToReference: "(Munro, 2024)",
				references: "Archer, M.S. (2003). <i>Structure, agency, and the internal conversation.</i> Cambridge University Press."
			},
			{
				title: `Budgeting`,
				description: `Estimating whether or not you can afford to do something in terms of money, time or effort`,
				image: `budgeting.png`,
				colour: `#fdbe00`,
				authorToReference: "(Munro, 2024)",
				references: "Archer, M.S. (2003). <i>Structure, agency, and the internal conversation.</i> Cambridge University Press."
			},
			{
				title: `Planning`,
				description: `Day, Week, Year`,
				image: `planning.png`,
				colour: `#4371c2`,
				authorToReference: "(Munro, 2024)",
				references: "Archer, M.S. (2003). <i>Structure, agency, and the internal conversation.</i> Cambridge University Press."
			},
			{
				title: `Rehearsing`,
				description: `Practicing what you will say or do`,
				image: `rehearsing.png`,
				colour: `#d2349e`,
				authorToReference: "(Munro, 2024)",
				references: "Archer, M.S. (2003). <i>Structure, agency, and the internal conversation.</i> Cambridge University Press."
			},
			{
				title: `Mulling Over`,
				description: `Dwelling on the problem`,
				image: `mulling-over.png`,
				colour: `#538135`,
				authorToReference: "(Munro, 2024)",
				references: "Archer, M.S. (2003). <i>Structure, agency, and the internal conversation.</i> Cambridge University Press."
			},
			{
				title: `Knowing`,
				description: `“Knowing” what the right thing to do is`,
				image: `knowing.png`,
				colour: `#8d0000`,
				authorToReference: "(Munro, 2024)",
				references: "Munro, D., Willis, J., Gibson, A., & Laundon, M. (2024). From inside the head to putting it on the table–supporting reflexive decision-making for unpaid female carers considering higher education. <i>Reflective Practice, 25</i>(3), 426-440."
			},
			{
				title: `Considering`,
				description: `Taking into account the experiences of others `,
				image: `considering.png`,
				colour: `#4ff2fa`,
				authorToReference: "(Munro, 2024)",
				references: "Munro, D., Willis, J., Gibson, A., & Laundon, M. (2024). From inside the head to putting it on the table–supporting reflexive decision-making for unpaid female carers considering higher education. <i>Reflective Practice, 25</i>(3), 426-440."
			},
			{
				title: `Comparing`,
				description: `Weighing your own experience alongside the experience of another person`,
				image: `comparing.png`,
				colour: `#caeafd`,
				authorToReference: "(Munro, 2024)",
				references: "Munro, D., Willis, J., Gibson, A., & Laundon, M. (2024). From inside the head to putting it on the table–supporting reflexive decision-making for unpaid female carers considering higher education. <i>Reflective Practice, 25</i>(3), 426-440."
			},
			{
				title: `Weighing up`,
				description: `Best case/worst case scenarios`,
				image: `weighing-up.png`,
				colour: `#d0b0df`,
				authorToReference: "(Munro, 2024)",
				references: "Munro, D., Willis, J., Gibson, A., & Laundon, M. (2024). From inside the head to putting it on the table–supporting reflexive decision-making for unpaid female carers considering higher education. <i>Reflective Practice, 25</i>(3), 426-440."
			},
			{
				title: `Downplaying`,
				description: `Minimising experiences and expectations`,
				image: `downplaying.png`,
				colour: `#c1cec0`,
				authorToReference: "(Munro, 2024)",
				references: "Munro, D., Willis, J., Gibson, A., & Laundon, M. (2024). From inside the head to putting it on the table–supporting reflexive decision-making for unpaid female carers considering higher education. <i>Reflective Practice, 25</i>(3), 426-440."
			},
			{
				title: `Praying`,
				description: `Talking with God about the issue before you`,
				image: `praying.png`,
				colour: `#9898fd`,
				authorToReference: "(Munro, 2024)",
				references: "Munro, D., Willis, J., Gibson, A., & Laundon, M. (2024). From inside the head to putting it on the table–supporting reflexive decision-making for unpaid female carers considering higher education. <i>Reflective Practice, 25</i>(3), 426-440."
			},
			{
				title: `Meditating`,
				description: `Considering future options in the light of one’s faith and spiritual calling`,
				image: `meditating.png`,
				colour: `#b3c5e5`,
				authorToReference: "(Munro, 2024)",
				references: "Munro, D., Willis, J., Gibson, A., & Laundon, M. (2024). From inside the head to putting it on the table–supporting reflexive decision-making for unpaid female carers considering higher education. <i>Reflective Practice, 25</i>(3), 426-440."
			},
			{
				title: `Worrying`,
				description: `Feeling anxious/concerned about present and future plans`,
				image: `worrying.png`,
				colour: `#998fc0`,
				authorToReference: "(Munro, 2024)",
				references: "Munro, D., Willis, J., Gibson, A., & Laundon, M. (2024). From inside the head to putting it on the table–supporting reflexive decision-making for unpaid female carers considering higher education. <i>Reflective Practice, 25</i>(3), 426-440."
			},
			{
				title: `Procrastinating`,
				description: `Putting off taking action/making decisions`,
				image: `procrastinating.png`,
				colour: `#b76be0`,
				authorToReference: "(Munro, 2024)",
				references: "Munro, D., Willis, J., Gibson, A., & Laundon, M. (2024). From inside the head to putting it on the table–supporting reflexive decision-making for unpaid female carers considering higher education. <i>Reflective Practice, 25</i>(3), 426-440."
			},
			{
				title: `Validating`,
				description: `Confirming that own choices are worthwhile`,
				image: `validating.png`,
				colour: `#88c0c3`,
				authorToReference: "(Munro, 2024)",
				references: "Munro, D., Willis, J., Gibson, A., & Laundon, M. (2024). From inside the head to putting it on the table–supporting reflexive decision-making for unpaid female carers considering higher education. <i>Reflective Practice, 25</i>(3), 426-440.",
				references: "Munro, D., Willis, J., Gibson, A., & Laundon, M. (2024). From inside the head to putting it on the table–supporting reflexive decision-making for unpaid female carers considering higher education. <i>Reflective Practice, 25</i>(3), 426-440."
			},
		]

		m.showCard = (card) => {
			m.$root.card = card
			m.$root.modalActive = true
			m.$applyAsync()

		}

		m.hideCard = () => {
			m.$root.modalActive = false
			m.$applyAsync()

			setTimeout(() => {
				m.$root.card = null
				m.$applyAsync()

			}, 360)
		}

		m.showInstructions = () => {
			m.showCard({
				title: `Instructions`,
				description: `INSTRUCTION TEXT TO GO HERE`,
			})
		}

		m.showAcknowledgements = () => {
			m.showCard({
				title: `Acknowledgements`,
				description: `ACKNOWLEDGEMENTS TEXT TO GO HERE`,
			})
		}

		m.showResources = () => {
			m.showCard({
				title: `Resources`,
				description: `RESOURCES TEXT TO GO HERE`,
			})
		}

		m.setModeToSorting = () => {
			m.$root.mode = 'sorting'
			setTimeout(() => {
				m.$root.hideCardImages = true
				m.$applyAsync()
			}, 200)
		}

		setTimeout(() => $(".css-transitions-only-after-page-load").removeClass("css-transitions-only-after-page-load"), 10);
		
	})

	/*Turns off the ng-scope, et al. debug classes*/
	.config([
		'$compileProvider', ($compileProvider) => {
			$compileProvider.debugInfoEnabled(false)
		}
	])



	/*draggable*/
	.directive('draggableCards', () => {
		return {
			restrict: 'A',
			scope: true,
			link: (scope, element, attrs) => {

				m.swappable = new Draggable.Sortable(document.querySelectorAll('.sorting-column-dropzone,.cards'), {
					draggable: '.card',
					handle: '.fa-arrows',
					sortAnimation: {
						duration: 360,
						easingFunction: 'ease-in-out',
					},
					classes: {
						'draggable:invalid': 'invalid-drop-zone'
					},
					plugins: [Draggable.Plugins.SortAnimation],
				})
			}
		}
	})

/*Sample directive*/
/*.directive('sampleDirective', () => {
	return {
		restrict: 'A',
		scope: true,
		link: (scope, element, attrs) => {
		
		}
	}
})*/