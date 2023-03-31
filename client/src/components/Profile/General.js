import AlertDialog from "components/common/AlertDialog";
import React from "react";

export default function General() {

  return (
    <>
        <div className="card">
            <div className="card-body">
                <form>
                    <div className="row">
                        <div className="col-md-8">
                            <div className="mb-3">
                                <label className="form-label">사용자 ID</label>
                                <input type="text" className="form-control" name="username" readOnly={true} defaultValue="admin"/>
                            </div>
                            <div className="row">
                                <div className="mb-3 col-md-6">
                                    <label className="form-label">부서</label>
                                    <input type="text" className="form-control" name="department"/>
                                </div>
                                <div className="mb-3 col-md-6">
                                    <label className="form-label">업무</label>
                                    <input type="text" className="form-control" name="username"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div className="card mt-3">
            <div className="card-body">
                <form>
                    <div className="mb-3 col-md-8">
                        <label className="form-label">사용자 명</label>
                        <input type="text" className="form-control" name="displayName" defaultValue="System Administrator"/>
                    </div>
                    <div className="mb-3 col-md-8">
                        <label className="form-label">이메일</label>
                        <input type="email" className="form-control" name="email"/>
                    </div>
                    <div className="mb-3 col-md-8">
                        <label className="form-label">전화</label>
                        <input type="text" className="form-control" name="phone"/>
                    </div>
                    <div className="mb-3 col-md-8">
                        <label className="form-label">기타</label>
                        <input type="text" className="form-control" name="etc" defaultValue="test"/>
                    </div>
                    <AlertDialog/>
                </form>
            </div>
        </div>
    </>
  );
};
