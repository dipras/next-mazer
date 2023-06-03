const Page = () => {
    return (
<div className="page-heading">
    <div className="page-title">
        <div className="row">
            <div className="col-12 col-md-6 order-md-1 order-last">
                <h3>Alert</h3>
                <p className="text-subtitle text-muted">A pretty helpful component to show emphasized information to the user.</p>
            </div>
            <div className="col-12 col-md-6 order-md-2 order-first">
                <nav aria-label="breadcrumb" className="breadcrumb-header float-start float-lg-end">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Alert</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
    <section className="section">
        <div className="row">
            <div className="col-12 col-md-6">
                <div className="card">
                    <div className="card-header">
                        <h4>Default</h4>
                    </div>
                    <div className="card-body">
                        <div className="alert alert-primary">This is primary alert.</div>
                        <div className="alert alert-success">This is success alert.</div>
                        <div className="alert alert-warning">This is warning alert.</div>
                        <div className="alert alert-danger">This is danger alert.</div>
                        <div className="alert alert-dark">This is dark alert.</div>
                        <div className="alert alert-secondary">This is secondary alert.</div>
                        <div className="alert alert-light">This is light alert.</div>
                        <div className="alert alert-info">This is info alert.</div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h4>With Icon</h4>
                    </div>
                    <div className="card-body">
                        <div className="alert alert-primary"><i className="bi bi-star"></i> This is primary alert.</div>
                        <div className="alert alert-success"><i className="bi bi-check-circle"></i> This is success alert.</div>
                        <div className="alert alert-warning"><i className="bi bi-exclamation-triangle"></i> This is warning
                            alert.</div>
                        <div className="alert alert-danger"><i className="bi bi-file-excel"></i> This is danger alert.</div>
                        <div className="alert alert-secondary"><i className="bi bi-star"></i> This is secondary alert.</div>
                        <div className="alert alert-info"><i className="bi bi-star"></i> This is info alert.</div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h4>Dismissable</h4>
                    </div>
                    <div className="card-body">
                        <div className="alert alert-primary alert-dismissible fade show" role="alert">
                            This is primary alert.
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                        <div className="alert alert-success alert-dismissible show fade">
                            This is a success alert.
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                        <div className="alert alert-warning alert-dismissible fade show" role="alert">
                            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                        <div className="alert alert-danger alert-dismissible show fade">
                            This is a danger alert.
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                        <div className="alert alert-dark alert-dismissible show fade">
                            This is a dark alert.
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                        <div className="alert alert-secondary alert-dismissible show fade">
                            This is a secondary alert.
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                        <div className="alert alert-light alert-dismissible show fade">
                            This is a light alert.
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                        <div className="alert alert-info alert-dismissible show fade">
                            This is a info alert.
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6">
                <div className="card">
                    <div className="card-header">
                        <h4>Light</h4>
                    </div>
                    <div className="card-body">
                        <div className="alert alert-light-primary color-primary"><i className="bi bi-star"></i> This is primary
                            alert.</div>
                        <div className="alert alert-light-success color-success"><i className="bi bi-check-circle"></i> This is
                            success alert.</div>
                        <div className="alert alert-light-warning color-warning"><i className="bi bi-exclamation-triangle"></i>
                            This is warning alert.</div>
                        <div className="alert alert-light-danger color-danger"><i className="bi bi-exclamation-circle"></i> This
                            is danger alert.</div>
                        <div className="alert alert-light-secondary color-secondary"><i className="bi bi-star"></i> This is
                            secondary alert.</div>
                        <div className="alert alert-light-info color-info"><i className="bi bi-star"></i> This is info alert.
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h4>Heading</h4>
                    </div>
                    <div className="card-body">
                        <div className="alert alert-primary">
                            <h4 className="alert-heading">Primary</h4>
                            <p>This is a primary alert.</p>
                        </div>
                        <div className="alert alert-success">
                            <h4 className="alert-heading">Success</h4>
                            <p>This is a success alert.</p>
                        </div>
                        <div className="alert alert-warning">
                            <h4 className="alert-heading">Warning</h4>
                            <p>This is a warning alert.</p>
                        </div>
                        <div className="alert alert-danger">
                            <h4 className="alert-heading">Danger</h4>
                            <p>This is a danger alert.</p>
                        </div>
                        <div className="alert alert-dark">
                            <h4 className="alert-heading">Dark</h4>
                            <p>This is a dark alert.</p>
                        </div>
                        <div className="alert alert-secondary">
                            <h4 className="alert-heading">Secondary</h4>
                            <p>This is a secondary alert.</p>
                        </div>
                        <div className="alert alert-light">
                            <h4 className="alert-heading">Light</h4>
                            <p>This is a light alert.</p>
                        </div>
                        <div className="alert alert-info">
                            <h4 className="alert-heading">Info</h4>
                            <p>This is a info alert.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
    )
}

export default Page;