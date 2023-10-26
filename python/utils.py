import io

ALLOWED_EXTENSIONS = {"csv", "xlsx", "xls"}

def formatoFile(filename):
    return filename.rsplit('.', 1)[1].lower()


def load_file_data(file):
    arquivo = file.file.read()
    return io.BytesIO(arquivo)