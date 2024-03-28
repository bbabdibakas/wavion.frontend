import cls from './ErrorFallbackComponent.module.scss'

interface ErrorFallbackComponentProps {
    error: Error;
}

const ErrorFallbackComponent = ({ error }: ErrorFallbackComponentProps) => {

    const onReloadPage = () => {
        location.reload()
    }

    return (
        <div className={cls.ErrorFallbackComponent}>
            <p>Something went wrong:</p>
            <div>{error.message}</div>
            <button type="button" onClick={onReloadPage}>
                reload page
            </button>
        </div>
    )
}

export default ErrorFallbackComponent