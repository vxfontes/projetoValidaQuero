ALLOWED_EXTENSIONS = {"csv", "xlsx", "xls"}

def allowedFile(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS