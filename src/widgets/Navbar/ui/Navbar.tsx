import { classNames } from 'shared/lib/classNames/classNames'
import classes from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { memo, useCallback, useState } from 'react'
import { LoginModal } from 'features/AuthByUsername'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'

interface NavbarProps {
	className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
	const { t } = useTranslation()
	const [isAuthModal, setIsAuthModal] = useState(false)
	const authData = useSelector(getUserAuthData)
	const dispatch = useDispatch()

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false)
	}, [])

	const onShowModal = useCallback(() => {
		setIsAuthModal(true)
	}, [])

	const onLogout = useCallback(() => {
		dispatch(userActions.logout())
	}, [dispatch])

	if (authData) {
		return (
			<nav className={classNames(classes.navbar, {}, [className])}>
				<Button
					theme={ButtonTheme.CLEAR_INVERTED}
					className={classes.links}
					onClick={onLogout}
				>
					{t('Logout')}
				</Button>
			</nav>
		)
	}

	return (
		<nav className={classNames(classes.navbar, {}, [className])}>
			<Button
				theme={ButtonTheme.CLEAR_INVERTED}
				className={classes.links}
				onClick={onShowModal}
			>
				{t('Sign in')}
			</Button>
			{isAuthModal && (
				<LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
			)}
		</nav>
	)
})
